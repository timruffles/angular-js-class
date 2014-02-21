var app = angular.module("exercise",[]);

app.controller("orderList",function($scope) {
  // YOUR CODE
  $scope.orderDone = function(order,index) {
    $scope.orders.splice($scope.orders.indexOf(order  ),1);
  }
});

app.factory("Order",function() {
  function Order(title) {
    this.title=  title;
  }
  return Order;
})


function Order(title) {
  this.title=  title;
}
return Order;
app.value("Order",Order);

app.controller("addOrder",function($scope) {
  // YOUR CODE
  $scope.addOrder = function() {
    $scope.orders.push({text: $scope.newOrderTitle});
    $scope.newOrderTitle = "";
  }
});

// $index
// {{}} - why
// orderFactory

app.controller("orders",function($scope) {
  $scope.orders = [
    {text:"warm cheese and mushroom cupcake"},
    {text:"citrus banoffee tart"},
    {text:"polenta meringue"},
    {text:"half a baker's dozen of unboiled bagles"}
  ];
})

