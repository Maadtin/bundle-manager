<?php

namespace Tappx\Controllers;

class BundleController extends Controller
{

    public function get($params)
    {

        $text = $_GET['text'] ?? '';

        $query = 'SELECT b.*, c.name as category_name  FROM bundles b LEFT JOIN categories c on b.category = c.id';

        if ($text) {
            $query .= ' WHERE MATCH (b.name, b.bundle, b.company, b.email) AGAINST ("*'.$text.'*" IN BOOLEAN MODE)';
        }

        $result = $this->connection->query($query);

        if ($result) {
            $parsedData = array_map(function ($bundle) {
                return [
                    'id' => (int)$bundle['id'],
                    'name' => $bundle['name'],
                    'bundle' => $bundle['bundle'],
                    'company' => $bundle['company'],
                    'email' => $bundle['email'],
                    'active' => $bundle['active'] === '1',
                    'category' => (int)$bundle['category'],
                    'categoryName' => $bundle['category_name']
                ];
            }, $result->fetchAll());

            return $this->toResponse(
                200,
                $parsedData
            );
        }

        return $this->toResponse(
            422,
            [],
            $this->getErrorMessage($this->connection)
        );

    }

    public function create($bundle)
    {
        $stmt = $this->connection->prepare('INSERT INTO bundles VALUES (null, :name, :bundle, :company, :email, :active, :category)');

        $result = $stmt->execute([
            ':name' => $bundle['name'],
            ':bundle' => $bundle['bundle'],
            ':company' => $bundle['company'],
            ':email' => $bundle['email'],
            ':active' => $bundle['active'] ? 1 : 0,
            ':category' => $bundle['category']
        ]);

        if ($result) {
            return $this->toResponse(
                201,
                array_merge(['id' => $this->connection->lastInsertId()], $bundle),
                'The bundle was created successfully.'
            );
        }

        return $this->toResponse(422, [], $this->getErrorMessage($stmt));
    }

    public function delete($bundleId)
    {
        $stmt = $this->connection->prepare('DELETE FROM bundles WHERE id = :bundleId');

        $result = $stmt->execute([':bundleId' => $bundleId]);

        if ($result) {
            return $this->toResponse(200, [], 'The bundle was deleted successfully');
        }

        return $this->toResponse(422, [], $this->getErrorMessage($stmt));
    }

}