<?php
require './models/Clients.php';

class ClientController
{
    private $clientModel;

    public function __construct($pdo)
    {
        $this->clientModel = new Client($pdo);
    }

    public function getAllClients()
    {
        $clients = $this->clientModel->getAllClients();
        sendResponse($clients);
    }

    public function getClientById($id_client)
    {
        $client = $this->clientModel->getClientById($id_client);
        if ($client) {
            sendResponse($client, 200);
        } else {
            sendResponse(['message' => 'Client non trouvé'], 404);
        }
    }
}
