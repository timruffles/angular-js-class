var app = angular.module("exercise",[]);

app.controller("user",function($scope,$timeout) {
  $scope.user = {list: [],name: "bob the generic user",count:0};

  $scope.$watch(function() {
    console.log("$digest checking watchers");
  });
  
  $scope.$watch("user.count",function(newValue,oldValue) {
    $scope.user.count += 1;
  });
  
  
  $scope.$watch("user",function(newValue,oldValue) {
    // run whenever value of expression changes
    console.log("user now '%s' was '%s'",newValue,oldValue);
  });

  // Exactly the watch created by <h1>Hello {{user.name}}</h1>
  $scope.$watch("user.name",function(newValue,oldValue) {
    // run whenever value of expression changes
    console.log("user.name now '%s' was '%s'",newValue,oldValue);
  });


  $scope.$watch(function($scope) {
    return $scope.user.name;
  },function(newVal,old) {
    // run whenever return value of function changes
    console.log("via fn, new/old",newVal,old);
  });

  $scope.timeout = function() {
    $timeout(function() {},500);
  }


});
