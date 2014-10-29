var app = angular.module("exercise",[]);
var DAYS = 24 * 60 * 60 * 1000;

app.controller("SearchCtrl", function($scope, Holiday) {
  $scope.holiday = new Holiday()
});

app.filter("dateRangeToInterval", function() {
  return function(range) {
    var duration = Math.ceil((range.end - range.start) / DAYS);
    return duration + " days";
  }
});

app.directive("fuzzyDate", function() {
  // define a directive that
  // - is given a variable to store the range to
  // - allows start/end dates to be set
  // - validates start/end logic
  // - has a fuzzy button that extends the start/end

  return {
    template: [
      "<div>",
      "  <h2>{{ title }}</h2>",
      "  <label>Start: <input ng-model='model.start'></label>",
      "  <label>End: <input ng-model='model.end'></label>",
      "  <label>Fuzzy? <input type=checkbox></label>",
      "</div>",
    ].join(""),
    // configure scope:
    // - allow reading/writing to date-model attribute
    scope: {
      model: "=dateModel",
      title: "@",
    },
    // restrict: decides how the directive will be
    // applied
    restrict: "E",
    // replace: will we replace the existing logic?
    replace: true,
    link: function(scope) {
      // write to scope prop to change
    },
  }

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
