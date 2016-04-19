angular.module("todoListApp", [])

.controller('mainCtrl', function($scope){
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
});
