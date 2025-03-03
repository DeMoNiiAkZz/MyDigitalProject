<?php

require './controllers/ClientController.php';


function clientRoutes($method)
{
    global $pdo;
    $controller = new ClientController($pdo);

    switch ($method) {
        case 'GET':
            $controller->getAllClients();
            
          
            break;
        
        case 'PUT': 
          
            break;

        default:
            
            sendResponse(['message' => 'Méthode non supportée'], 405);
            break;
    }
}
