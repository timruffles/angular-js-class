var app = angular.module("exercise",[]);

app.controller("defineMe",function($scope) {
});


app.controller("listful",function($scope) {
  // TODO
  $scope.list = [
    { title: "a" }, 
    { title: "b" }, 
  ]; // looking a bit bare

  $scope.empty = function() {
    return $scope.list.length === 0; 
  }
})

app.controller("tabs", function($scope) {
  $scope.tab = "a";
  // TODO
  // the view is expecting a function to be defined
  // on the scope - can you fill it in?
  //
  $scope.showTab = function(id) {
    $scope.tab = id; 
  }
})
