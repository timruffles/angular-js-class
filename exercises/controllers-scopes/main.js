var app = angular.module("exercise",[]);

// YOUR CODE
// we're missing a controller
// - you'll see an error in the console that'll suggest what to fix.
app.controller("defineMe",function($scope){
  // whatever you like
});

app.controller("listful",function($scope) {
  // YOUR CODE
  $scope.list = [
  {title: "ebi"}
  ]; // looking a bit bare
})

app.controller("tabs",function($scope) {
  // YOUR CODE
  // the view is expecting a function to be defined
  // on the scope - can you fill it in?
  $scope.tab = "a";
  $scope.showTab = function(tab) {
    $scope.tab = tab;
  }
});
