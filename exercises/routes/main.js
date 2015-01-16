var app = angular.module("exercise",["ngRoute"]);

app.config(function($locationProvider) {
  // won't work for file://
  // normally we'd use this to enable pushState
  // so we're using hashChange
  // $locationProvider.html5Mode(true);
});

app.config(function($routeProvider) {
  // we'd like to define three routes for the three paths
  // - how can we do that?
  $routeProvider
    .when("/baked-goods", {
      template: "<h1>Baked goods</h1>",
    })
    .when("/", {
      template: "<h1>Home</h1>",
    })
    .when("/coffee", {
      template: "<h1>Coffee</h1>",
    })
});

app.controller("configWarnCtrl", function($location, $scope) {
  $scope.wrongConfig = function() {
    return $location.protocol() !== "file";
  }

});
