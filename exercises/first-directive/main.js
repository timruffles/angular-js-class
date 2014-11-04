var exercise = angular.module("exercise",[]);

exercise.directive("flash",function() {
  return {
    restrict: "A",
    link: function(scope,el,attrs) {
      el.on("click", function() {
        el.remove();
      });
    }
  }
})
