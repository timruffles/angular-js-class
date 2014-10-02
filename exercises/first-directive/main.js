var exercise = angular.module("exercise",[]);


exercise.directive("cookieCrap", function($rootElement) {

  return {

    restrict: "E",

    templateUrl: "cookie-crap.html",

    replace: true,

    link: function(scope, el, attrs) {


      scope.yes = function() {
        el.remove();
      }

      scope.no = function() {
        $rootElement.html("<h1>Bye then!</h1>")
      }

    }, 
  };



});
