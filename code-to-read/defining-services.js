

angular.module("someModule", [])
// uber method - low level, bit nasty
.provide("Stripe", function() {

  var stripeHeaders = {};

  this.$get = function($http) {
    return {
      pay: function() {
        $http.post("/purchases", {}, {
          headers: stripeHeaders
        });
      }
    }
  }

  this.setStripeHeaders = function(headers) {
    stripeHeaders = headers;
  }

})
.config(function($locationProvider, $routeProvider,
   StripeProvider) {
  this.setStripeHeaders({
    "x-secret-token": "foobarbaz",
  })
})

// sugar methods
.factory("User", function defineUserService($) {

  function User(name) {
    this.name = name;
  }
  User.prototype.save = function() {
    $.post("/users", this);
  }
  
  return User;
})
.controller("UserSignup", function(User, $scope) {
  $scope.user = new User;

  $scope.save = function() {
    $scope.user.save();
  }

})
.service("UserRepository", function defineService($q, $http) {

  this.get = function(id) {
    return $http.get("/users" + id).then(parse);
  }

})
.value("User", User)



.constant("UserConfig", {})




function User(name) {
  this.name = name;
}
User.prototype.save = function() {
  $.post("/users", this);
}



