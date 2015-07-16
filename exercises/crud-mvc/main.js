var app = angular.module("exercise",[]);

app.controller("orderList",function($scope) {
  $scope.bulkDeleteTargets = {};

  $scope.remove = function(index) {
    $scope.orders.splice(index, 1);
  };

  $scope.bulkDelete = function() {
    Object.keys($scope.bulkDeleteTargets).forEach($scope.remove);
    $scope.bulkDeleteTargets = {};
  };
});

app.controller("addOrder",function(
  $scope
  , Order
) {

  $scope.add = function() {
    var newOrder = new Order({
      text: $scope.order.text,
    });

    var dupe = $scope.orders.some(function(order) {
      return order.eq(newOrder); 
    });

    if(dupe) {
      return;
    }

    $scope.orders.push(newOrder);
    $scope.order = {};
  };
});

app.controller("orders",function($scope, Order) {
  $scope.orders = [
    new Order({text:"warm cheese and mushroom cupcake"}),
    new Order({text:"citrus banoffee tart"}),
    new Order({text:"polenta meringue"}),
    new Order({text:"half a baker's dozen of unboiled bagles"}),
  ];
})

app.factory("Order", function() {

  function Order(data) {
    this.text = data.text;
  }

  Order.prototype = {
    eq: function(otherOrder) {
      return otherOrder.text === this.text; 
    }
  }

  return Order;
  
});
