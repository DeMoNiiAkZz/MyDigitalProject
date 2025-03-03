<?php
require './models/Clients.php';

class ClientController {
    private $clientModel;

    public function __construct($pdo) {
        $this->clientModel = new Client($pdo);
    }

    public function getAllClients() {
        $clients = $this->clientModel->getAllClients();
        sendResponse($clients);
    }
}
?>
