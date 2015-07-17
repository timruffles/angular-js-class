/**
 * event CRUD for organisers
 */
(function() {
"use strict"
  
angular.module('events')
.config(routes)
.controller("EventCrudCtrl", EventCrudCtrl)


function EventCrudCtrl(
  Event
  , $scope
) {
  
  var self = this;

  resetForm();

  self.events = Event.query();

  self.creating = false;

  self.remove = function(event) {
    event.$delete()
     .then(function() {
       var index = self.events.indexOf(event); 
       self.events.splice(index, 1);
     })
  }

  self.create = function(event) {
    event.preventDefault();

    self.creating = true;

    self.newEvent.$save()
      .then(function() {
        self.events.push(self.newEvent); 
        resetForm();
      });
  }

  function resetForm() {
    if($scope.createEvent) {
      $scope.createEvent.$setPristine();
    }

    self.newEvent = new Event;
  }

}

function routes($routeProvider) {

  $routeProvider
    .when("/events/create", {
      templateUrl: "/src/eventManagement/eventManagement.html",
      controller: "EventCrudCtrl",
      controllerAs: "ctrl",
    })
  
}

})();
