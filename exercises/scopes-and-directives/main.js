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

    // this is a custom tag - e.g <tr-model, not <div tr-model
    restrict: "E",

    templateUrl: "./modal.html",
    // replace true as we can't compose with directives
    // on our element
    replace: true,

    // configure to transclude dynamic content
    transclude: true,

    // =, @, &
    scope: {
      // configure scope access for API
      title: "@",
      options: "&",
      acceptedModel: "=",
      dismissed: "&",
      shown: "&",
    },

    link: function(scope, el, attrs) {

      var config = {};
      var hidden = false;

      var rawEl = el[0];
      var parent = rawEl.parentElement;

      hide();

      // watch options (as object) and update config
      scope.$watchCollection(scope.options, 
      function(nv, ov) {
        config = nv;
      });

      scope.$watch(scope.shown, function(shown) {
        // show and hide modal when 'shown'
        shown ? show() : hide(); 
      });


      scope.$watch("acceptedModel", function(yes) {
        if(yes) {
          scope.dismissed();
          hide();
        }
      });

      // WARNING - angular.element().remove()
      // will destroy the scope, not just pluck
      // element from DOM. Not what we want
      function show() {
        if(!hidden) {
          return;
        }
        // TODO ensure element is in DOM
        parent.appendChild(rawEl);
        hidden = false;
      }

      function hide() {
        if(hidden) {
          return;
        }
        parent.removeChild(rawEl);
        hidden = true;
      }

      function config(conf, old) {
        // TODO update our config, applying defaults
      }
    },

  }
});

