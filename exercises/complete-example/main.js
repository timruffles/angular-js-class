angular.module("exercise",["ngResource"])
.controller("TodoCtrl", TodoCtrl)
.controller("TodoListCtrl", TodoListCtrl)
.service("TodoRepo", todoRepo)

function TodoCtrl(TodoRepo, $scope) {
  $scope.create = function() {
    TodoRepo.create($scope.todo);
    $scope.todo = {};
  }
}

function TodoListCtrl(TodoRepo, $scope) {
  $scope.todos = TodoRepo.all();
}

function todoRepo($resource) {

  var Todo = $resource("/api/todo/:id",
      {id: "@id"},
      { 
        create: { method: "POST" },
      });

  var all;

  this.create = function(data) {
    var todo = Todo.create(data);
    all.push(todo);
    todo.$save();
    return todo;
  }

  this.all = function() {
    return all || (all = Todo.query());
  }

  this.get = function(id) {
    return Todo.get(id);
  }

}

