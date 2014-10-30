angular.module("exercise")
.factory("orderRepo", orderRepo);

// orderRepo abstracts the persistence of Orders, in an
// active-record style.
function orderRepo($resource) {

  var repo = {};

  // define our resource

  // this is where we'll cache the list of
  // all orders, so we can update it with newly created ones
  var all;

  // retrieve list of orders, from local cache if possible
  repo.all = function() {
  }

  // create order, and update cached list,
  // *or* query for all and then update
  repo.create = function(data) {
  }


  return repo;

}
