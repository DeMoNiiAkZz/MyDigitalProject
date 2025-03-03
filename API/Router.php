<?php

class Router
{
    private $config ;

    private $routes = [];

    public function __construct() {
        $this->config = parse_ini_file('./config/config.ini', true);
    }

    public function get($path, $callback)
    {
        $this->routes['GET'][$path] = $callback;
    }

    public function post($path, $callback)
    {
        $this->routes['POST'][$path] = $callback;
    }

    public function put($path, $callback)
    {
        $this->routes['PUT'][$path] = $callback;
    }

    public function delete($path, $callback)
    {
        $this->routes['DELETE'][$path] = $callback;
    }

    public function handleRequest($uri, $method)
    {
        $routedebase = $this->config['route']['chemin_api'];
        
    $uri = str_replace($routedebase, "", $uri);

        if (isset($this->routes[$method][$uri])) {
            call_user_func($this->routes[$method][$uri]);
        } else {
            sendResponse(['message' => 'Route non trouvée'], 404);
        }
    }
}
