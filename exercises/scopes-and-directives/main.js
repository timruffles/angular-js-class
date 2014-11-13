angular.module("exercise",[])
.controller("AppCtrl", function($scope) {

  // we're using this message as a handler
  $scope.sayThanks = function() {
    alert("thanks!");
  };

  // here is our user object
  $scope.user = {
    termsAndConditions: false,
    name: "Harold",
  }

})
.directive("trModal", function() {
  // defaults to only matching on attributes
  return {

    // TODO configure as custom element
    // TODO configure scope access for API
    // TODO configure to transclude dynamic content


    templateUrl: "./modal.html",
    // replace true as we can't compose with directives
    // on our element
    replace: true,


    link: function(scope, el, attrs) {

      var config = {};

      hide();

      // TODO need to watch options (as object) and update config


      // TODO shown and hide modal when 'shown'
      // value changes


      // WARNING - angular.element().remove()
      // will destroy the scope, not just pluck
      // element from DOM. Not what we want
      function show() {
        // TODO ensure element is in DOM
      }
      function hide() {
        // TODO remove element from DOM
      }

      function config(conf, old) {
        // TODO update our config, applying defaults
      }
    },

  }
});

