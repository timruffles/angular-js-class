var app = angular.module("exercise",[]);

function trackingFactory($http) {
  var tracking = {};
  var events = {};
  tracking.event = function(eventName) {
    if(!events[eventName]) {
      events[eventName] = 0;
    }
    return events[eventName] += 1;
  }
  tracking.save = function() {
    $http.post("/events",events);
  }
  return tracking;
}

app.factory("tracking",trackingFactory);


