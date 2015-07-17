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
		// TODO remove event
  }

  self.create = function(event) {
    event.preventDefault();

		// TODO create
  }

  function resetForm() {
    if($scope.createEvent) {
			// reset the form state
      $scope.createEvent.$setPristine();
    }

		// TODO create event
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
