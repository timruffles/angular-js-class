var app = angular.module("exercise",[]);

function TrackingService($http) {
  var observed = {};
  this.event = function(event) {
    var current = observed[event];
    return observed[event] = current ? current + 1 : 1;
  };
  this.save = function() {
    $http.post("/track",observed);
  };
}

app.service("tracking",TrackingService);


