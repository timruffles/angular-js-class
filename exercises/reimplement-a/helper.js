
var helper = angular.module("helper",[]);
helper.directive("fadeOut",function() {
  return function(scope,el,attrs) {
    setTimeout(function() {
      el.addClass("go");
    },500);
  }
})
