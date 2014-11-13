angular.module("exercise",[])
.controller("AppCtrl", function($scope) {

  $scope.sayThanks = function() {
    alert("thanks!");
  };

  $scope.user = {
    termsAndConditions: false,
    name: "Harold",
  }

})
.factory("modalManager", function() {
  // allow controllers to show specific modals
  var mng = {
    register: function() {
    },
    show: function() {
    },
  };
  var modals = {};

  return mng;

})
.directive("trModal", function($timeout, $document) {
  // defaults to only matching on attributes
  return {

    restrict: "E",

    scope: {
      options: "&",
      title: "@",
      acceptedModel: "=",
      dismissed: "&", 
      shown: "=",
    },

    templateUrl: "./modal.html",
    replace: true,

    transclude: true,

    link: function(scope, el, attrs) {

      removeFromDom();

      // deep watch to get an options object,
      // just make sure they're all scalars
      scope.$watch(scope.options, config, true);

      scope.$watch("acceptedModel", function(v) {
        console.log("accepted: ", v);
      });

      scope.doThing = function() {
        alert("hi");
      }

      scope.$watch("shown", function(yes) {
        if(yes)
          show();
        else
          removeFromDom();
      });

      function show() {
        $document.find("body")[0].appendChild(el[0]);
      }

      function removeFromDom() {
        if(!el[0].parentElement) return;
        el[0].parentElement.removeChild(el[0]);
      }

      function config(conf, old) {
        console.log(conf)
        scope.config = conf;
      }
    },

  }
});

