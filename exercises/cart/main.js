angular.module("exercise",[])
.controller("ShoppingCtrl", ShoppingCtrl)
.controller("SearchCtrl", SearchCtrl)
.controller("SearchResultCtrl", SearchResultCtrl)
.directive("searchBox", searchBox)
.directive("cart", cart)
.factory("Cart", cartModel)



function ShoppingCtrl($scope, Cart) {
  $scope.cart = new Cart;
}
function SearchCtrl($scope) {
}

function SearchResultCtrl($scope) {
}


function cartModel() {
  function Cart() {
    this.items = [];

    // dummy
    this.items = [
      { price: 15, title: "MBP" },
      { price: 10, title: "burger" },
    ]
  }

  Object.defineProperties(Cart.prototype, {
    total: {
      get: function() {
        return this.items.reduce(function(sum, el) {
          return sum + el.price;
        }, 0)
      }
    },
    length: {
      get: function() {
        return this.items.length;
      }
    },
  });

  return Cart;
}

function searchBox() {
  return {
    restrict: "E",
    templateUrl: "search-box.html",
    replace: true,
    link: function(scope, el, attr) {
    },
  }
}

function cart() {
  return {
    restrict: "E",
    templateUrl: "cart.html",
    replace: true,
    link: function(scope, el, attr) {
    },
  }
}

