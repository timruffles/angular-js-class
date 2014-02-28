var app = angular.module("exercise",["ngResource"]);

app.value("dummy",{defined: true});

app.factory("Topic",function($resource){
  return $resource("/api/topics/:id",{id: "@id"});
});

app.controller("todo",function($scope,Topic) {
  $scope.topicList = Topic.query();
})

app.controller("topicList",function($scope,Topic) {
});

app.controller("addItem",function($scope,Topic) {
  $scope.addItem = function(item) {
    var topic = new Topic(item);
    topic.$save().then(function() {
      $scope.topicList.push(topic);
    })
    $scope.item = {};
  };
});


app.filter("titleMatch",function() {
  return function(input,glob) {
    debugger
    if(!glob) return input;
    return input.filter(function(topic) {
      return topic.title.indexOf(glob) !== -1
    })
  }
});