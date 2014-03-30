var app = angular.module("exercise",[]);

function trackingFactory($http) {
  var events = {};
  var tracking = {
    event: function(name) {
      if(events[name] == null) {
        events[name] = 0;
      }
      return events[name] += 1;
    },
    save: function() {
      $http.post("/events",events);
    }
  };
  return tracking;
}

app.service("tracking",trackingFactory);


