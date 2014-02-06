function LibrosListController($scope, $http) {
  $http.get('data/libros.json').success(function(data) {
  	console.log("LibrosListController http.get success...");
    $scope.libros = data;
  });
 
  //defines una variable
  $scope.var1 = "variable definida desde el controlador";
 
  //selecciona el desplegable y ordena automaticamente, variable definida en la vista con ng-model
  $scope.orderField = "titulo";
  $scope.orderReverse = "true";
}