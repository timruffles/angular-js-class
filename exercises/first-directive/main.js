var exercise = angular.module("exercise",[]);

exercise.directive("flash",function() {
  return function(scope,el,attrs) {
    el.on("click",function() {
      el.addClass("go");
    });
    el.on("webkitTransitionEnd",function() {
      el.remove();
    })
  }
})
