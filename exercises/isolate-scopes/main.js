var app = angular.module("exercise",[]);
var DAYS = 24 * 60 * 60 * 1000;

app.controller("SearchCtrl", function($scope, Holiday) {
  $scope.holiday = new Holiday()
});

app.filter("dateRangeToInterval", function() {
  return function(range) {
    var duration = Math.ceil((range.end - range.start) / (DAYS));
    return duration + " days";
  }
});

app.directive("fuzzyDate", function() {
  // define a direct that
  // - is given a variable to store the range to
  // - allows start/end dates to be set
  // - validates start/end logic
  // - has a fuzzy button that extends the start/end

});


app.factory("Holiday", function() {
  function Holiday(props) {
    props = props || {};
    this.range = props.range || dateRange(new Date(+new Date + 31 * DAYS), new Date(+new Date + 38 * DAYS));
  }

  return Holiday;
});

function dateRange(start, end) {
  return { start: start, end: end };
}
