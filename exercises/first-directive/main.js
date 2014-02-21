var exercise = angular.module("exercise",[]);

exercise.directive("flash",function() {
  return function(scope,el,attrs) {
    el.on("click",function() {
      el.addClass("go");
      setTimeout(function() {
        el.remove()
      },500)
    });
  }
})
