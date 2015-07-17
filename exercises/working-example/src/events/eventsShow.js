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

  self.event = new Event({
    id: $routeParams.id,
  });

  self.event.$get()
    .then(function() {
      self.success = true; 
    }, function() {
      self.failure = true; 
    });
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
