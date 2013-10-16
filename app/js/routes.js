app.config(function($locationProvider) {
  $locationProvider.html5Mode(true);
});
app.config(function($routeProvider) {
  $routeProvider
    .when("/",{
      template: "<h1>Welcome</h1><a href='/drawings' class=button>List drawings</a><a href='/drawings/new' class=button>Start a drawing</a>",
      controller: "rootCtrl"
    })
    .when("/drawings",{
      templateUrl: "/tpls/drawings_list.html",
      controller: "drawingsCtrl"
    })
    .when("/drawings/new",{
      templateUrl: "/tpls/drawing_new.html",
      controller: "drawingCreateCtrl"
    })
    .when("/drawings/:id",{
      templateUrl: "/tpls/drawing_new.html",
      controller: "drawingCreateCtrl"
    });
});
