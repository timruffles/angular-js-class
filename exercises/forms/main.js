var exercise = angular.module("exercise",[])


exercise.controller("BuyShoelaceCtrl", function($scope) {
  var master = {
    count: 5
  };
  $scope.shoelace = angular.copy(master);

  $scope.buy = function() {

    if($scope.shoelaceForm.$invalid) {
      return;
    }

    $scope.laces.push($scope.shoelace);

    $scope.shoelace = angular.copy(master);
  } 
});

exercise.controller("ShoelaceListCtrl", function($scope) {
  $scope.laces = [];
});
