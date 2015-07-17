// TODO - implement orderRepo: read the rest of the file, but
//                             you only need to modify orderRepo

// orderRepo abstracts the persistence of Orders, in an
// active-record style.
function orderRepo($resource) {

  var repo = {};

  // TODO define our resource
  // - the URL is '/api/order'
  // - add a `create` method that POSTs

  // this is a place to cache the list of
  // all orders, so we can update it with newly created ones
  var all;

  // TODO retrieve list of orders, from local cache if possible
  repo.all = function() {
  }

  // TODO create order, and update cached list,
  // *or* query for all and then update
  repo.create = function(data) {
  }


  return repo;

}

// END TODO

angular.module("exercise",["ngResource"])
.controller("orderList",function($scope) {
  // YOUR CODE
  $scope.done = function(index) {
    var order = $scope.orders[index];
    order.$delete()
      .then(function() {
        var index = $scope.orders.indexOf(order);
        $scope.orders.splice(index,1);
      });
  }
})
.controller("addOrder",function($scope, orderRepo) {
  // YOUR CODE
  $scope.add = function(newOrder) {
    var record = orderRepo.create(newOrder);
    $scope.newOrder = {};
  }
})
.controller("orders",function($scope, orderRepo) {
  $scope.orders = orderRepo.all();
})

angular.module("exercise")
.factory("orderRepo", orderRepo);


