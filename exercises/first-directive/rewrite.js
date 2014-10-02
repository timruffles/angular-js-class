var exercise = angular.module("exercise",[]);

exercise.directive("cookieCrap",function() {
  return {
    restrict: "E",
    template: [
      "<div class=cookie-crap>",
      "<p>Are you scared of COOKIES?</p>",
      "<button ng-click=yes()>Yes</button>",
      "<button ng-click=no()>No</button>",
      "</div>",
    ].join(""),
    replace: true,
    link: function(scope,el,attrs) {
      // YOUR CODE
      // unwrap jqLite
      el = el[0];

      scope.no = function() {
        el.classList.add("go")
        el.addEventListener("webkitTransitionEnd", function() {
          el.parentElement.removeChild(el);
        });
      }

      scope.yes = function() {
        document.body.innerHTML = "<h1>Backup functionality</h1><img src='http://www.pbh2.com/wordpress/wp-content/uploads/2013/05/cutest-cat-gifs-tickle.gif'>";
      }

    }
  }
})



