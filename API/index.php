<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require 'config/database.php';  // Connexion à la base de données
require 'routes/ClientRoutes.php'; // Routes pour les clients
require 'Router.php'; // Le routeur qui gère les URL

$router = new Router();

// On récupère l'URI et la méthode de la requête HTTP
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$method = $_SERVER['REQUEST_METHOD'];

// Gestion des routes
$router->get("/client", function() {
    clientRoutes($_SERVER['REQUEST_METHOD']);
});

$router->handleRequest($uri, $method);
?>
