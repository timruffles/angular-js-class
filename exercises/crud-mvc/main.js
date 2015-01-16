var app = angular.module("exercise",[]);

app.controller("orderList",function($scope) {
  $scope.remove = function(order) {
    var index = $scope.orders.indexOf(order);
    $scope.orders.splice(index, 1);
    console.log($scope.orders);
  }

  $scope.edit = function(order) {
    order.editing = true;
  }
});

app.directive("fancyValidation",function() {
  return {
    require: "ngModel", 
    link: function(scope, el, attrs, ngModelController) {
      ngModelController.$validators.fancy = function(value) {
        return value && value.length > 5;
      }
    }
  }
});



app.controller("addOrder",function($scope) {
  // YOUR CODE
  $scope.createOrder = function() {
    $scope.orders.push($scope.order);
    $scope.order = {};
  }
});

app.controller("orders",function($scope) {
  $scope.orders = [
    {text:"warm cheese and mushroom cupcake"},
    {text:"citrus banoffee tart"},
    {text:"polenta meringue"},
    {text:"half a baker's dozen of unboiled bagles"}
  ];
})

