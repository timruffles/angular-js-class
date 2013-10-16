var app = angular.module("exercise",["ngRoute"]);

app.config(function($locationProvider) {
  // won't work for file://
  // $locationProvider.html5Mode(true);
});

app.config(function($routeProvider) {
  // we'd like to define 3 routes for the /, b and c paths
  // - how can we do that?
});

