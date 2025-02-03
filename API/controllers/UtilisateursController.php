<?php
require './models/Utilisateurs.php';
require_once './middlewares/RoleMiddleware.php';


class UtilisateursController
{
    private $utilisateurModel;

    public function __construct($pdo)
    {
        $this->utilisateurModel = new Utilisateurs($pdo);
    }

    public function getUtilisateurs()
    {
        $middlewareResponse = middleware();

        if ($middlewareResponse['fetchAll']) {
            $users = $this->utilisateurModel->getAllUtilisateurs();
            sendResponse($users, 200);
        } elseif ($middlewareResponse['fetchAll'] === false) {
            $users = $this->utilisateurModel->getUtilisateursClients();
            sendResponse($users, 200);
        } else {

            sendResponse(['message' => 'Accès refusé : vous n\'êtes pas autorisé à effectuer cette action.'], 403);
        }
    }

    public function getUtilisateur($id)
    {
        $user = $this->utilisateurModel->getUtilisateurById($id);
        if ($user) {
            sendResponse($user, 200);
        } else {

            sendResponse(['message' => 'Utilisateur non trouvé'], 404);
        }
    }

    public function updateUtilisateurAdmin($data)
    {

        if (empty($data['id_utilisateur']) || empty($data['nom']) || empty($data['prenom']) || empty($data['email']) || empty($data['id_role'])) {
            sendResponse("Données manquantes", 400);
            exit();
        }

        if (!isset($data['id_utilisateur']) || empty($data['id_utilisateur'])) {
            sendResponse("L'id de l'utilisateur est introuvable", 404);
            exit();
        }
        
        $id_utilisateur = $data['id_utilisateur'];
        $nom = $data['nom'];
        $prenom = $data['prenom'];
        $nom_utilisateur = $data['nom_utilisateur'];
        $email = $data['email'];
        $id_role = $data['id_role'];

        $user = $this->utilisateurModel->updateUtilisateurAdmin($id_utilisateur, $nom, $prenom, $nom_utilisateur, $email, $id_role);

        if ($user) {
            sendResponse($user, 200);
            
        } else {

            sendResponse(['message' => 'Un problème est survenue lors de la mise à jour de l\'utilisateur'], 500);
        }
    }
}
