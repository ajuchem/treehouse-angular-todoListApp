angular.module("todoListApp", [])

.controller('mainCtrl', function($scope, dataService){
$scope.helloConsole = dataService.helloConsole;

  $scope.learningNgChange = function(){
    console.log("An input changed!");
  };

  $scope.todos = [
    {"name": "clean the house"},
    {"name": "feed the cats"},
    {"name": "water the lawn"},
    {"name": "pay bills"},
    {"name": "run"},
    {"name": "relax"}
  ]

})
.service('dataService', function(){

  this.helloConsole = function(){
    console.log('This is the hello console service.');
  }

});
