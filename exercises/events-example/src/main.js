(function() {
"use strict";

angular.module("events", ["ngRoute", "ngResource"])
.config(function(
  $locationProvider
  , $routeProvider
) {

  // use push-state for routing
  $locationProvider.html5Mode(true); 

  $routeProvider.otherwise({
    templateUrl: "/src/errors/404.html",
  });

});
  

})();

