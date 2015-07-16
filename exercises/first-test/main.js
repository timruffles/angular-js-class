var app = angular.module("exercise",[]);

function trackingFactory($http) {
  var tracking = {};

  var events = {};

  tracking.event = function(name) {
    events[name] = (events[name] || 0) + 1;
    return events[name];
  };

  tracking.save = function() {
    $http.post('/api/events'); 
  }


  return tracking;
}

app.factory("tracking",trackingFactory);


