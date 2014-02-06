function LibroDetailController($scope, $http, $routeParams) {
	$scope.id = $routeParams.libroId;
	console.log("LibroDetailController...");

	//$http.get('data/libro'+$scope.id+'.json').success(function(data) {
	$http.get('data/libros.json').success(function(data) {
		console.log("LibroDetailController http.get success...");
		$scope.libro = data[$scope.id];
	});

}