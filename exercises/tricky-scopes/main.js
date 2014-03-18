var app = angular.module("exercise",[]);

app.controller("main",function($scope) {
  $scope.counter = {value: 0}
});

app.controller("child",function($scope) {
  $scope.increment = function() {
    $scope.counter.value += 1
  }
  $scope.delayedIncrement = function() {
    setTimeout(function() {
      $scope.counter.value += 1
      $scope.$apply();
    },250); // just perceptible delay
    
  }
});
