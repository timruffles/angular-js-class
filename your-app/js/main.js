var app = angular.module("littleSketcher",["ngRoute","ngResource"]);

app.controller("rootCtrl",function($scope,$rootScope) {
});


app.controller("drawingCreateCtrl",function($scope) {
});

app.controller("drawingsCtrl",function($scope,DrawingRecord) {
});

app.factory("DrawingRecord",function($resource) {
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



