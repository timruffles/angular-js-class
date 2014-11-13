angular.module("exercise",[])
directive("keyboardHandler", keyboardHandler);

function keyboardHandler($window, $parse, $sce) {
  return {
    restrict: "E",
    link: function(scope, el, attrs) {
      var handlers;

      scope.$on("$destroy", cleanUp);
      $window.addEventListener("keydown", handler);

      var keys = {};

      angular.forEach(attrs, function(expr, attrName) {
        keys.
      });


      function handler(event) {
        var expr = handlers[event.keyCode];
        if(expr) {
          event.preventDefault();
          var v = expr(scope);
        }
      }

      function cleanUp() {
        $window.removeEventListener("keydown", v);
      }
    },
  }
}
