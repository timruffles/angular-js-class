var app = angular.module("exercise",[]);

app.directive("tour",function() {
  return {
    // define our tour controller
    controller: function($scope) {
      $scope.tourSteps = []
      $scope.tourPosition = 0;
      this.register = function(el,text,priority) {
        $scope.tourSteps.push({
          el: el,
          text: text,
          priority: priority
        })
        $scope.tourSteps.sort(function(a,b) {
          return b.priority - a.priority
        })
      }
    },
    link: function(scope) {
      scope.nextTourStep = function() {
        if(scope.tourPosition <= scope.tourSteps.length) {
          scope.tourPosition += 1
        }
      };
      scope.$watch("tourPosition",function(current,previous) {
        var prevStep = scope.tourSteps[previous - 1];
        if(prevStep) prevStep.el.removeClass("tour")
        var currStep = scope.tourSteps[current - 1];
        if(currStep) currStep.el.addClass("tour"); 
      })
      // useful functions for views to display the state of the tour
      scope.tourStep = function(index) {
        return scope.tourSteps[scope.tourPosition - 1];
      }
      scope.tourComplete = function() {
        return scope.tourSteps.length < scope.tourPosition
      }
      scope.tourUnstarted = function() {
        return scope.tourPosition === 0
      }
      scope.tourInProgress = function() {
        return !(scope.tourComplete() || scope.tourUnstarted())
      }
      scope.restartTour = function() {
        return scope.tourPosition = 1
      }
      scope.dismissTour = function() {
        return scope.tourDismissed = true
      }
    }
  }
});

app.directive("tourStep",function() {
  return {
    // ^ prefix: search element's parents
    // for a given controller
    require: "^tour",
    link: function(scope,element,attrs,tourController) {
      // here the controller we've found can be used, allowing us
      // to register tour steps to a parent tour controller
      if(attrs.tourIf != null && !scope.$eval(attrs.tourIf)) {
        return;
      }
      var priority = 0
      if(attrs.tourPriority != null) {
        priority = parseInt(attrs.tourPriority)
      }
      tourController.register(element,attrs.tourStep,priority)
    }
  }
});

// STUBBED CONTROLLERS
app.controller("orders",function($scope) {
  $scope.orders = [
    {text:"warm cheese and mushroom cupcake"},
    {text:"citrus banoffee tart"},
    {text:"polenta meringue"},
    {text:"half a baker's dozen of unboiled bagles"}
  ];
})

app.controller("orderList",function($scope) {
});

app.controller("addOrder",function($scope) {
});

