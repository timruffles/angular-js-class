var app = angular.module("exercise",[]);

app.controller("orders",function($scope) {
  $scope.orders = [
    {text:"warm cheese and mushroom cupcake"},
    {text:"citrus banoffee tart"},
    {text:"polenta meringue"},
    {text:"half a baker's dozen of unboiled bagles"}
  ];
})

app.controller("orderList",function($scope) {
});

app.controller("addOrder",function($scope) {
});
