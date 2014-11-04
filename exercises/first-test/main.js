var app = angular.module("exercise",[]);

function trackingFactory($http) {
  var tracking = {};

  var count = {};

  tracking.event = function(name) {
    if(name in count)  {
      return count[name] += 1;
    } else {
      return count[name] = 1;
    }
  };

  tracking.save = function() {
    $http.post("/api/tracking",
        count);
  };


  return tracking;
}

app.factory("tracking",trackingFactory);


