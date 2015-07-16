var app = angular.module("exercise",["ngRoute"]);

app.config(function($locationProvider) {
  // won't work for file://
  // normally we'd use this to enable pushState
  $locationProvider.html5Mode(true);
});

app.controller('BakedGoodsCtrl', function(
  $routeParams
  , $scope
) {
  
  $scope.id = $routeParams.id
})

app.controller('Step2Ctrl', function(
  SignupState
  , Products
) {
  
  this.products = Products.query(SignupState.get());

})


app.factory("SignupState", function() {

  var state = {};


  this.put = function() {
    
  };

  this.retrieve = function() {
    
  };
  
});

app.config(function($routeProvider) {

  // we'd like to define three routes for the three paths
  // - how can we do that?
  $routeProvider
<<<<<<< Updated upstream
    .when("/routes/baked-goods", {
      templateUrl: "/routes/baked-goods.html",
    })
    .when("/routes", {
      templateUrl: "/routes/home.html",
    })
    .when("/routes/coffee", {
      templateUrl: "/routes/coffee.html",
=======
    .when("/", {
      templateUrl: "home.html",
    })
    .when("/coffee", {
      templateUrl: "coffee.html",
    })
    .when("/baked-goods/:id", {
      templateUrl: "goods.html",
>>>>>>> Stashed changes
    })
});

