<?php
require 'cors.php';

$config = parse_ini_file('config.ini', true);

$dbHost = $config['database']['host'];
$dbUser = $config['database']['user'];
$dbPassword = $config['database']['password'];
$dbName = $config['database']['dbname'];

try {
    $pdo = new PDO("mysql:host=$dbHost;dbname=$dbName;charset=utf8", $dbUser, $dbPassword);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    sendResponse(["error" => "Connection failed: " . $e->getMessage()], 500);
}

function sendResponse($data, $status = 200)
{
    http_response_code($status);
    header('Content-Type: application/json');
    echo json_encode($data);
    exit();
}
