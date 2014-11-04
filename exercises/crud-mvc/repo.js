angular.module("exercise")
.factory("orderRepo", orderRepo);

// orderRepo abstracts the persistence of Orders, in an
// active-record style.
function orderRepo($resource) {

  var repo = {};

  // define our resource
  var Order = $resource("/api/order/:id",
      // take the value for param :id from the id property
      {id: "@id"},
      // add a 'create' method that posts for creating items
      { 
        create: { method: "POST" },
      });

  var all;

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

  // retrieve list of orders, from local cache if possible
  repo.all = function() {
    return all || (all = Order.query());
  }

  return repo;

}
