var app = angular.module("exercise",[]);

function trackingFactory($http) {
  var tracking = {};

  var count = {};

  tracking.event = function(event) {
    if(!(event in count)) {
      count[event] = 0;
    }
    count[event] += 1;
  };

  tracking.save = function() {
    $http.post("/api/track", count);
  }

  return tracking;
}

app.factory("tracking",trackingFactory);


