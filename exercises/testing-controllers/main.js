angular.module("exercise",[])
.controller("ToggleCtrl",function($scope, UserRepo) {

  $scope.user = {
    optedIn: false,
  }

  $scope.$watch("user.optedIn", function(val, newVal) {
    if(val === newVal) return;
    UserRepo.opted($scope.user);
  });

  this.optIn = function() {
    $scope.user.optedIn = true;
  }
})
.service("UserRepo", function() {
  this.opted = function() {
  }
});


