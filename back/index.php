<?php

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

require './vendor/autoload.php';

$controller = $_GET['controller'];
$requestMethod = $_SERVER['REQUEST_METHOD'];
$method = $_GET['method'];

function getRequestData()
{
    switch ($_SERVER['REQUEST_METHOD']) {
        case 'POST':
        case 'DELETE':
            return json_decode(file_get_contents('php://input'), true);
        default:
            return null;
    }
}

function processRequest($controller, $method, $data)
{
    if (!$controller && !$method) {
        return json_encode([
            'data' => [],
            'status' => 'error',
            'message' => 'Route not found'
        ]);
    }

    $controllerName = "Tappx\\Controllers\\" . ucfirst($controller) . 'Controller';
    $instance = new $controllerName;

    $payload = $instance->$method($data);

    http_response_code($payload['code']);

    if ($payload['status'] === 'error') {
        return json_encode([
            'data' => $payload['data'],
            'status' => 'error',
            'message' => $payload['message']
        ]);
    }

    return json_encode([
        'data' => $payload['data'],
        'status' => $payload['status'],
        'message' => $payload['message']
    ]);


}


$data = getRequestData();

$response = processRequest($controller, $method, $data);

echo $response;

