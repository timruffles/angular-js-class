var exercise = angular.module("exercise",[])

exercise.controller("BuyShoelaceCtrl", function($scope) {
  $scope.buy = function() {
    // TODO don't run if form is invalid
    if($scope.shoelaceForm.$invalid) return;
    // TODO add lace to laces list
    $scope.laces.push($scope.shoelace);
    // TODO reset form
    $scope.shoelace = {};
  }
});

exercise.controller("ShoelaceListCtrl", function($scope) {
  $scope.laces = [];
});
