<?php

use Dotenv\Dotenv;

require './vendor/autoload.php';

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();


header('Access-Control-Allow-Origin: '. $_ENV['FRONT_URL']);
header('Access-Control-Allow-Methods: HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] == "OPTIONS") {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization');
    header('HTTP/1.1 200 OK');
    die();
}


if (isset($_GET['controller']) && isset($_GET['action'])) {
    $controller = $_GET['controller'];
    $requestMethod = $_SERVER['REQUEST_METHOD'];
    $action = $_GET['action'];

    function getRequestData()
    {
        switch ($_SERVER['REQUEST_METHOD']) {
            case 'POST':
            case 'DELETE':
                return json_decode(file_get_contents('php://input'), true);
            case 'GET':
                return $_GET;
            default:
                return null;
        }
    }

    function processRequest($controller, $action, $data)
    {
        if (!$controller && !$action) {
            return json_encode([
                'data' => [],
                'status' => 'error',
                'message' => 'Route not found'
            ]);
        }

        $controllerName = 'Tappx\\Controllers\\' . ucfirst($controller) . 'Controller';
        $instance = new $controllerName;

        $payload = $instance->$action($data);

        http_response_code($payload['code']);

        if ($payload['status'] === 'error') {
            return json_encode([
                'status_code' => $payload['code'],
                'data' => $payload['data'],
                'status' => 'error',
                'message' => $payload['message']
            ]);
        }

        return json_encode([
            'status_code' => $payload['code'],
            'data' => $payload['data'],
            'status' => $payload['status'],
            'message' => $payload['message']
        ]);


    }


    $data = getRequestData();

    $response = processRequest($controller, $action, $data);

    echo $response;
} else {
    echo 'Silence is Golden';
}


