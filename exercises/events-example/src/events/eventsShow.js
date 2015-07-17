/**
 * viewing events
 */
(function() {
"use strict"
  
angular.module('events')
.config(routes)
.controller("EventsShowCtrl", EventsShowCtrl)


function EventsShowCtrl(
  Event
  , $routeParams
) {
  
  var self = this;

	// TODO query for event, and set success or failure
}

function routes($routeProvider) {

  $routeProvider
    .when("/events/:id", {
      templateUrl: "/src/events/eventsShow.html",
      controller: "EventsShowCtrl",
      controllerAs: "ctrl",
    })
  
}

})();
