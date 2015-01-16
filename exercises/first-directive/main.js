var exercise = angular.module("exercise",[]);

exercise.controller("answerCtrl", function($scope) {
  $scope.record = function(answer) {
    console.log("cookies %s", answer);
  }
});

exercise.directive("trModel",function() {

  return {
    restrict: "A",
    scope: {
      currentlySelected: "=trCurrentlySelected",
      answer: "&trFlashAnswer",
      webSocketUrl: "@trSocketUrl",
    },
    link: function(scope) {
      scope.model = true;
      
      scope.currentlySelected = "tim";
      scope.webSocketUrl // 'ws://domain/1024/something'
    },
  }

});


exercise.directive("trFlash",function() {
  return {
    restrict: "E",
    scope: {
      answer: "&trFlashAnswer",
       
    },
    transclude: true,
    template: [
      "<a class='alert-box success'>",
      "   <div ng-transclude></div>",
      "</a>",
    ].join(""),
    link: function(scope, el, attrs, controller) {
      scope.$parent[attrs.trFlashController] = controller;
      scope.remove = function() {
        el.remove();
      }
    },
    controller: function($scope) {
      // YOUR CODE
      this.remove = function() {
        $scope.remove();
      }
    }
  }
})
