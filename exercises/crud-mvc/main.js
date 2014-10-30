var app = angular.module("exercise",[]);

app.controller("orderList",function($scope) {
  // TODO implement deleting done orders
});

app.controller("addOrder",function($scope) {
  // TODO implement new orders
});

app.controller("orders",function($scope) {
  $scope.orders = [
    {text:"warm cheese and mushroom cupcake"},
    {text:"citrus banoffee tart"},
    {text:"polenta meringue"},
    {text:"half a baker's dozen of unboiled bagles"}
  ];
})

