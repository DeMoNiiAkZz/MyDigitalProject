<?php

require './controllers/UtilisateursController.php';


function utilisateurRoutes($method)
{
    global $pdo;
    $controller = new UtilisateursController($pdo);

    switch ($method) {
        case 'GET':
            if (isset($_GET['id'])) {
                $controller->getUtilisateur(intval($_GET['id']));
            } else {
                
                $controller->getUtilisateurs();
            }
            break;
        
        case 'PUT': 
            $data = json_decode(file_get_contents('php://input'), true);
            
            $controller->updateUtilisateurAdmin($data);
            
            break;

        default:
            
            sendResponse(['message' => 'Méthode non supportée'], 405);
            break;
    }
}
