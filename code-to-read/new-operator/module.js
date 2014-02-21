var app = angular.module("app",[]);

var app = angular.module("exercise",[]);

var namespace = {};

namespace.User = User;

app.factory("User",function provider($timeout) {
  // I get run once
  function User(name) {
    // constructor
    this.name = name;
    $timeout();
  }
  User.prototype.age = 0;
  return User;
});

app.controller("UserController",function($scope,User) {
  // constructor
  var user = new User();
});