var app = angular.module("exercise",[]);

app.controller("DefineMeCtrl",function($scope) {
});


app.controller("ListfulCtrl",function($scope) {
  // TODO
  this.list = [
    { title: "a" }, 
    { title: "b" }, 
  ]; // looking a bit bare

  this.empty = function() {
    return this.list.length === 0; 
  }
})

app.controller("TabsCtrl", function($scope) {
  this.tab = "a";
  // TODO
  // the view is expecting a function to be defined
  // on the scope - can you fill it in?
  //
  this.showTab = function(id) {
    this.tab = id; 
  }
})
