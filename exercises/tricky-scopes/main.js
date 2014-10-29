var app = angular.module("exercise",[]);

app.controller("main",function($scope) {
  $scope.count = { value: 0 };
})

app.controller("child",function($scope, $timeout) {
  $scope.increment = function() {
    $scope.count.value += 1;
  }
  $scope.delayedIncrement = function() {
    $timeout(function() {
      $scope.count.value += 1;
    },250); // just perceptible delay
  }
})




main = {count: 0}
child = {}


// situation two
main = {count: 0}
child = {count: 1}
