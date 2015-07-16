var exercise = angular.module("exercise",[])

exercise.controller("BuyShoelaceCtrl", function($scope) {


  $scope.shoelace = {
    count: 5,
  };


  $scope.buy = function() {
    $scope.laces.push({
      color: $scope.shoelace.color,
      count: $scope.shoelace.count,
    })


    $scope.shoelace = {};
  } 
});

exercise.controller("ShoelaceListCtrl", function($scope) {
  $scope.laces = [];
});
