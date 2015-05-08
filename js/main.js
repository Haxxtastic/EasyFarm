var app = angular.module("myApp", []);

app.controller("AppController", ["$scope", function($scope) {
  $scope.name = "Ari Lerner"
}]);

app.controller("ProjectController", ["$scope", function($scope){
  $scope.name = "EasyFarm";
  $scope.description = "General Purpose Farming Tool For Final Fantasy XI";
}]);
