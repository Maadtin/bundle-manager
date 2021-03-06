<?php


namespace Tappx\Controllers;


class Controller
{

    protected $connection;

    public function __construct()
    {
        $dsn = 'mysql:host='.$_ENV['DB_HOST'].';dbname='.$_ENV['DB_NAME'];
        $this->connection = new \PDO($dsn, $_ENV['DB_USER'], $_ENV['DB_PASS']);
        $this->connection->setAttribute(\PDO::ATTR_DEFAULT_FETCH_MODE, \PDO::FETCH_ASSOC);
    }

    public function toResponse($statusCode, $data = [], $message = '')
    {

        $status = $statusCode >= 200 && $statusCode < 400 ? 'ok' : 'error';

        return [
            'data' => $data,
            'status' => $status,
            'code' => $statusCode,
            'message' => $message
        ];
    }

    public function getErrorMessage ($obj) {
        if ($obj instanceof \PDO || $obj instanceof \PDOStatement) {
            return $obj->errorInfo()[2];
        } else if ($obj instanceof \PDOException) {
            return $obj->getMessage();
        }
        return $obj;
    }

}