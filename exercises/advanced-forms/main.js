var app = angular.module("exercise",[]);



app.directive("humanDate", function($filter) {
  // directive should do a best effort to handle numeric or human dates
  return {
    require: "ngModel",
    link: function(scope, el, attrs, ngModel) {

      // TODO use angular's parsing feature with 'parse()'

      // TODO use angular's formatting with 'formatDate()' 

      // TODO use angular's validation feature with 'parse()' indicate when the date isn't valid

      function parseOrFallback(value) {
        var parsed = parse(value)
        return parsed || value;
      }

      function formatDate(value) {
        if(parseDate(value)) {
          return dateFilter(value, "shortDate");
        } else {
          return value;
        }
      }

      function parseDate(value) {
        var parsed = Date.parse(value);
        return isNaN(parsed) ? false : new Date(parsed);
      }

      function parse(value) {
        return parseHuman(value) || parseDate(value);
      }
    },
  };

});

app.controller("SearchCtrl", function($scope) {
  $scope.holiday = {
    start: new Date(+new Date + 31 * DAYS), 
    end: new Date(+new Date + 38 * DAYS),
    get duration() {
      return this.end - this.start;
    },
  };
});
