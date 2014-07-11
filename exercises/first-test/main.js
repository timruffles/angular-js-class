var app = angular.module("exercise",[]);

function trackingFactory($http) {
  var tracking = {};
  return tracking;
}

app.factory("tracking",trackingFactory);


