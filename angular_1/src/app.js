


console.log("Iniciando app...");

var app = angular.module('app', ['ngRoute']);

console.log("app: "+app);
//angular.module('app', []).

app.

//definimos las rutas de la 'app'
config(['$routeProvider', function($routes) {

	console.log("definiendo routes...");

	$routes.when('/libros', {
		templateUrl : 'src/views/libros-list.html',
		controller : LibrosListController
	}).

	//mediante dos puntos (:) definimos un parámetro
	when('/libro/:libroId', {
		templateUrl : 'src/views/libro.html',
		controller : LibroDetailController
	}).

	//cualquier ruta no definida
	otherwise({
		redirectTo : '/libros'
	});
	
	console.log("routes ok...");

}]); 