var exercise = angular.module("exercise",[]);

exercise.directive("flash",function() {
  return {
    restrict: "E",
    scope: {
      message: "@",
    },
    template: 
      "<p class='alert-box success'>" +
      "  {{ message }} " + 
      "</p>",
    link: function(scope, el,attrs) {
      scope.message =
        scope.message || "Here's a temporary message - click to dismiss";

      var rawEl = el[0];
      // YOUR CODE
      el.on("click", function() {
        el.remove(); 
      });
    }
  }
})


exercise.directive("highlight",function() {
  return {
    restrict: "A",
    link: function(scope, el,attrs) {

      el.on("mouseover", function() {
        el.find("p").css("background", "yellow"); 
      })

      el.on("mouseout", function() {
        el.find("p").css("background", null); 
      })
    }
  }
})
