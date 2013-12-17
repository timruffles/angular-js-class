var app = angular.module("exercise",[]);

app.controller("user",function($scope,$timeout) {
  $scope.list = [];

  // <h1>Hello {{name}}</h1>
  $scope.$watch("name",function(newValue,oldValue) {

  })


  $scope.$watch("list.length",function(length,oldLength) {
    // run whenever value of expression changes
  });
  $scope.$watch(function($scope) {
    return $scope.list.length;
  },function(length,oldLength) {
    // run whenever return value of function changes
    console.log("via fn",length,oldLength)
  });


  setTimeout(function() {
    $scope.$apply(function() {
      $scope.list.push("A")
    })
  },250)
  $timeout(function() {
    $scope.list.push("B")
  },500)
});
