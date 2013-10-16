var app = angular.module("littleSketcher",["ngRoute","ngResource"]);

app.controller("rootCtrl",function($scope,$rootScope) {
});


app.controller("drawingCreateCtrl",
  function($scope,$rootScope,backState,DrawingRecord,$routeParams,errors) {

  $scope.undone = [];
  $scope.saved = false

  var record = $scope.record = new DrawingRecord();
  if($routeParams.id != null) {
    record._id = $routeParams.id;
    record.$get()
  } else {
    record.commands = []
  }
  $scope.saved = true

  $scope.newStroke = function(command) {
    $scope.saved = false
    $scope.undone = [];
    record.commands.push(_.defaults({
      type: "path"
    },command))
  };
  $scope.verb = function() {
    if(record.$isNew()) {
      return $scope.saved ? "Created" : "Create"
    } else {
      return $scope.saved ? "Up to date" : "Update"
    }
  }
  $scope.undo = function() {
    $scope.saved = false
    if(record.commands < 1) return;
    $scope.undone.push(record.commands.pop());
  };
  $scope.redo = function() {
    $scope.saved = false
    if($scope.undone.length < 1) return;
    record.commands.push($scope.undone.pop());
  };
  $scope.save = function() {
    var verb = record.$isNew() ? "create" : "save"
    record["$" + verb]().catch(_.partial(errors,"There was a problem saving your drawing!"))
  };

  backState("Home","/");
});

app.controller("drawingsCtrl",function($scope,DrawingRecord) {
  $scope.drawings = DrawingRecord.query();
  $scope.deleteDrawing = function(drawing) {
    drawing.$delete()
      .then(function() {
        $scope.$emit("notify:completed","Drawing deleted");
        _.spliceOut($scope.drawings,drawing)
      })
      .catch(function() {
        $scope.$emit("notify:error","Drawing could not be deleted");
      })
  }
});

app.factory("DrawingRecord",function($resource) {
  var Drawing = $resource("/api/drawing/:id",{id: '@_id'},{
    'query':  {method:'GET', isArray:true, url: "/api/drawings"},
    'create':  {method:'POST', url: "/api/drawings"},
  })
  Drawing.prototype.$isNew = function() { return this._id == null }
  return Drawing;
});

app.factory("errors",function() {
  return function(msg) {
    alert(msg)
  }
})

_.mixin({
  spliceOut: function(arr,obj) {
    var index = _.indexOf(arr,obj)
    arr.splice(index,1)
  }
})



