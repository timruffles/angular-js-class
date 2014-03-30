var app = angular.module("exercise",[]);

app.controller("user",function($scope,$timeout,$log) {
  $scope.user = {list: [],name: "bob the generic user"};

  $scope.$watch(function() {
    debugger;
    console.log("$digest checking watchers");
  });

  // Exactly the watch created by <h1>Hello {{user.name}}</h1>
  $scope.$watch("user.name",function(newValue,oldValue) {
    // run whenever value of expression changes
    $log.info("user.name now '%s' was '%s'",newValue,oldValue);
  });


  $scope.$watch(function($scope) {
    return $scope.user.name;
  },function(newVal,old) {
    // run whenever return value of function changes
    $log.info("via fn, new/old",newVal,old);
  });

  $scope.timeout = function() {
    $timeout(function() {},500);
  }


});
