<?php
class Client {
    private $pdo;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    public function getAllClients(){
        $stmt = $this->pdo->prepare("SELECT * FROM clients");
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

}
?>
 