<?php

require './controllers/ClientController.php';


function clientRoutes($method)
{
    global $pdo;
    $controller = new ClientController($pdo);

    switch ($method) {
        case 'GET':

            if(isset($_GET['id_client'])){
                $id_client = $_GET['id_client'];
                
                $controller->getClientById($id_client);
                exit();
            }
            $controller->getAllClients();
            
          
            break;
        
        case 'PUT': 
          
            break;

        default:
            
            sendResponse(['message' => 'Méthode non supportée'], 405);
            break;
    }
}
