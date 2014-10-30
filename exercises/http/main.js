// EXERCISE CODE - implement orderRepo

// orderRepo abstracts the persistence of Orders, in an
// active-record style.
function orderRepo($resource) {

  var repo = {};

  // TODO define our resource
  // - the URL is '/api/order'
  // - add a `create` method that POSTs
  var Order = $resource("/api/order/:id",
      // take the value for param :id from the id property
      {id: "@id"},
      // add a 'create' method that posts for creating items
      { 
        create: { method: "POST" },
      });

  // this is a place to cache the list of
  // all orders, so we can update it with newly created ones
  var all;

  // TODO retrieve list of orders, from local cache if possible
  repo.all = function() {
    if(!all) all = Order.query();
    return all;
  }

  // TODO create order, and update cached list,
  // *or* query for all and then update
  repo.create = function(data) {
    var order = Order.create(data);
    // if we already have the cache...
    if(all) {
      // update it
      all.push(order);
    } else {
      // or retrieve it, then cache object
      all = Order.query();
      all.$promise.then(function() {
        all.push(order);
      });
    }
    
    return order;
  }


  return repo;

}

// END OF EXERCISE CODE

angular.module("exercise",["ngResource"])
.controller("orderList",function($scope) {
  $scope.done = function(index) {
    var order = $scope.orders[index];

    order.deleting = true;
    order.$delete()
      .then(function() {
        var index = $scope.orders.indexOf(order);
        $scope.orders.splice(index,1);
      }, function() {
        order.deleting = false;
        console.error("Couldn't delete - check the resource URL");
      });
  }
})
.controller("addOrder",function($scope, orderRepo) {
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


