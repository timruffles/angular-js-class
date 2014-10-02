var app = angular.module("exercise",[]);

function trackingFactory($http) {
  var tracking = {};

  var counts = {};
  tracking.event = function(name) {
    counts[name] = (counts[name] || 0) + 1;
  }

  tracking.save = function() {
    $http.post("http://trackme.me", counts);
  }
  return tracking;
}

app.factory("tracking",trackingFactory);


