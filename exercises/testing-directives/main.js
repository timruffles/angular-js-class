angular.module("exercise",[])
.directive("flash",function() {
  return function(scope,el,attrs) {
    el.on("click", function() {
      el.remove();
    });
  }
})

