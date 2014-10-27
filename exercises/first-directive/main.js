var exercise = angular.module("exercise",[]);

exercise.directive("flash",function() {
  return function(scope, el, attrs) {

    el.on("click", function() {
      el.addClass("go");
    });

  }
});


// <input ng-model='user.name'
app.directive("iqModel", function() {
  return {
    scope: {
      model: "=ngModel",
    },
    link: function(scope, el, attrs) {
      el.on("input", function() {
        scope.model = el.val()
      });
    }
  };
})


// <modal title="Hello {{ user.name }}">
//   <!-- template content -->
// </modal>
app.directive("modal", function() {
  return {
    // element = <modal>
    // *attribute = <div modal>
    // data = <div data-modal>
    // class = <div class="modal">
    restrict: "EADC",
    template: "<div></div>",
    templateUrl: "/some/template.html",
    scope: {
      title: "@title",
    },
    link: function(scope, el, attrs) {
      el.on("click", function() {
        // kick off modal...
        //
        modalTitleEl.innerHTML = scope.title;
      });
    }
  };
})


// <button iq-click="message(user)"></button>
app.directive("iqClick", function() {
  return {
    scope: {
      click: "&iqClick",
    },
    link: function(scope, el, attrs) {
      el.on("click", scope.click);
    }
  };
})
