var app = angular.module("exercise",[]);

app.controller("PreferencesCtrl", function(Preferences, $scope) {


  $scope.$watch("prefsForm.$valid", function(newVal, oldVal) {
    if(!newVal) {
      return;
    }

    Preferences.update($scope.preferences);
    
  });


});


app.service("Preferences", function($http) {
  this.update = function() {
  }
});

