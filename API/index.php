<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
require 'config/database.php';
require 'routes/UtilisateursRoutes.php';

require 'Router.php';  


$router = new Router();

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$path = "/API/";

//utilisateurs
$router->get("{$path}utilisateurs", function() {
    utilisateurRoutes($_SERVER['REQUEST_METHOD']);
});