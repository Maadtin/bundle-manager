<?php

namespace Tappx\Controllers;

class CategoryController extends Controller
{

    public function get()
    {
        $data = $this->connection->query('SELECT * FROM categories')->fetchAll();

        return $this->toResponse(200, $data);
    }

    public function create($category)
    {
        $stmt = $this->connection->prepare('INSERT INTO categories VALUES (null, :name)');

        $result = $stmt->execute([
            ':name' => $category['name'],
        ]);

        if ($result) {
            return [
                'data' => array_merge(['id' => $this->connection->lastInsertId()], $category),
                'status' => 'ok',
                'code' => 201,
                'message' => 'The category was created successfully.'
            ];
        }

        return [
            'data' => [],
            'status' => 'error',
            'code' => 413,
            'message' => $stmt->errorInfo()
        ];
    }

    public function delete($categoryId)
    {
        $stmt = $this->connection->prepare('DELETE FROM categories WHERE id = :categoryId');

        $result = $stmt->execute([':categoryId' => $categoryId]);

        if ($result) {
            return [
                'data' => [],
                'status' => 'ok',
                'code' => 204,
                'message' => 'The category was deleted successfully'
            ];
        }

        return [
            'data' => [],
            'status' => 'error',
            'code' => 201,
            'message' => $stmt->errorInfo()
        ];
    }

}