var app = angular.module("exercise",[]);

// YOUR CODE
// we're missing a controller
// - you'll see an error in the console that'll suggest what to fix.
app.controller("defineMe",function($scope) {})

app.controller("listful",function($scope) {
  // YOUR CODE
  $scope.list = [{title:"one"},{title:"two"}]; // looking a bit bare
  $scope.remove = function(index) {
    $scope.list.splice(index,1);
  }
  $scope.add = function() {
    $scope.list.push({
      title: $scope.newItem
    });
    $scope.newItem = "";
  }
})

app.controller("tabs",function($scope) {
  // YOUR CODE
  // the view is expecting a function to be defined
  // on the scope - can you fill it in?
  $scope.tab = "a";
  $scope.showTab = function(newTab) {
    $scope.tab = newTab;
  }
})
