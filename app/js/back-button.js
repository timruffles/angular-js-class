app.directive("backButton",function(backState,$location) {
  return {
    template: "<a ng-hide='location.path() == back.route' ng-href='{{ back.route }}'>{{back.name}}</a>",
    replace: true,
    scope: {},
    link: function(scope,element,attrs) {
      scope.back = backState()
      scope.location = $location
    }
  };
});

app.factory("backState",function() {
  var back = {name: "Back", route: "/"};
  return function(name,route) {
    if(name == null) return back
    back.name = name
    back.route = route
  };
});
