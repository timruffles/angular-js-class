var app = angular.module("exercise",[]);

// TODO
// we're missing a controller
// - you'll see an error in the console that'll suggest what to fix.
app.controller("defineMe",function($scope) {
});

app.controller("listful",function($scope) {
  // TODO
  $scope.list = [
    {title:"bagle"},
    {title:"danish"},
    {title:"muffin"},
  ]; // looking a bit bare
});

app.controller("TabsCtrl",function($scope) {
  // TODO
  this.showTab = function(tab) {
    $scope.tab = tab;
  }

  this.showTab("a");
});
