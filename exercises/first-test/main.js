var app = angular.module("exercise",[]);

function trackingFactory($http) {
  var tracking = {};

  var events = {};

  return tracking;
}

app.factory("tracking",trackingFactory);


