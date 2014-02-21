var app = angular.module("exercise",[]);

app.controller("main",function($scope) {
  $scope.counter = {count:0}
})

app.controller("child",function($scope,$timeout) {
  $scope.increment = function() {
    $scope.counter.count = $scope.counter.count + 1
  }
  $scope.delayedIncrement = function() {
    $timeout(function() {
      $scope.counter.count += 1
    },250); // just perceptible delay
  }
})
