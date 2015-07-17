(function() {
"use strict";

angular.module("events", ["ngRoute", "ngResource"])
.config(function($locationProvider) {

  // use push-state for routing
  $locationProvider.html5Mode(true); 

});
  

})();

