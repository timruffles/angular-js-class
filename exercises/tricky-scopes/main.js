var app = angular.module("exercise",[]);

app.controller("main",function($scope) {
  $scope.count = 0
})

app.controller("child",function($scope) {
  $scope.increment = function() {
    $scope.count += 1
  }
  $scope.delayedIncrement = function() {
    setTimeout(function() {
      $scope.count += 1
    },250); // just perceptible delay
  }
})
