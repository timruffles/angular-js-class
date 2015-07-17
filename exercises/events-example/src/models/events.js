(function() {
"use strict"

angular.module('events')
.service("Event", function(
  $resource
) {

  var Event = $resource("/api/event/:id", {
    id: "@id",
  });

  return Event;
  
});

})();
