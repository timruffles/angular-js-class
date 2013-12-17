
var app = angular.module("app",[]);
app.factory("User",function(DB) {

  function User() {
  }
  User.prototype.update = function() {
    var db = new DB();
  }

  return User;
})

app.controller("newUser",function(User,$scope) {

  $scope.user = new User; 

})
