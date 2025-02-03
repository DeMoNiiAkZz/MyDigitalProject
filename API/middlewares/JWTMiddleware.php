<?php
require 'vendor/autoload.php';

use \Firebase\JWT\JWT;
use \Firebase\JWT\ExpiredException;

class JwtMiddleware {
    private $secretKey = "9Qf@5w$2s!KjRz#t8BvPp7Dg4h6Xk1"; 

    public function verifyJwt() {
        $headers = apache_request_headers(); 

        if (!isset($headers['Authorization'])) {
            http_response_code(403); 
            echo json_encode(["message" => "Token non fourni"]);
            return false; 
        }

        $arr = explode(" ", $headers['Authorization']);
        if (count($arr) != 2) {
            http_response_code(403);
            echo json_encode(["message" => "Format du token invalide"]);
            return false; 
        }

        $jwt = $arr[1]; 

        try {

            $decoded = JWT::decode($jwt, $this->secretKey, array(['HS256']));
            return $decoded; 
        } catch (ExpiredException $e) {
            http_response_code(401);
            echo json_encode(["message" => "Token expiré"]);
            return false; 
        } catch (Exception $e) {
            http_response_code(401);
            echo json_encode(["message" => "Token invalide"]);
            return false; 
        }
    }
}
