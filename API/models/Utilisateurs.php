<?php
class Utilisateurs {
    private $pdo;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    public function getAllUtilisateurs($search = '') {
        $search = '%' . $search . '%';
        $stmt = $this->pdo->prepare("SELECT nom, prenom, email, telephone, id_utilisateur, id_role FROM ro_utilisateurs
                                      WHERE nom LIKE :search OR nom_utilisateur LIKE :search OR email LIKE :search");
        $stmt->bindParam(':search', $search);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getUtilisateursClients() {
        $id_role = 3;
        $stmt = $this->pdo->prepare("SELECT nom, prenom, email, telephone, id_utilisateur, id_role FROM ro_utilisateurs
                                      WHERE id_role = :id_role");
        $stmt->bindParam(':id_role', $id_role);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getUtilisateurById($id) {
        $stmt = $this->pdo->prepare("SELECT u.*, r.nom_role FROM ro_utilisateurs u 
                                      INNER JOIN ro_roles r ON r.id_role = u.id_role 
                                      WHERE u.id_utilisateur = :id");
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function updateUtilisateurAdmin($id_user, $nom, $prenom, $nom_utilisateur, $email, $role){
        $stmt = $this->pdo->prepare("UPDATE ro_utilisateurs SET nom = :nom, prenom = :prenom, nom_utilisateur = :nom_utilisateur, email = :email, id_role = :role WHERE id_utilisateur = :id_user");
        $stmt->bindParam(':nom', $nom);
        $stmt->bindParam(':prenom', $prenom);
        $stmt->bindParam(':nom_utilisateur', $nom_utilisateur);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':role', $role, PDO::PARAM_INT);
        $stmt->bindParam(':id_user', $id_user, PDO::PARAM_INT);
        return $stmt->execute();
    }

}
?>
 