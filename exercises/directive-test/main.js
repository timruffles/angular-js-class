var app = angular.module("exercise",[]);

app.directive("cookieCrap",function() {
  return { 
    restrict: "E",
    template: "<div><button class=yes>Yes</button></div>", 
    replace: true,
    link: function(scope, el, attrs) {
      $(el).on("click", ".yes", function() {
        alert("clicked");
        el.addClass("ng-hide");
      });
    }
  };
});


