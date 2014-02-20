var app = angular.module("exercise",[]);

function trackingFactory($http) {
  var tracking = {};
  return tracking;
}

app.service("tracking",trackingFactory);


