var app = angular.module("exercise",[]);

app.controller("main",function($scope) {
  $scope.count = { counter: 0 }
})

app.controller("child",function($scope) {
  $scope.increment = function() {
    $scope.count.counter += 1
  }
  $scope.delayedIncrement = function() {
    setTimeout(function() {
      $scope.count.counter += 1
			$scope.$digest();
    },250); // just perceptible delay
  }
})
