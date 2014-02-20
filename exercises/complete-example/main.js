var app = angular.module("exercise",[]);

app.value("dummy",{defined: true});

angular.injector(["ng"]).invoke(function($http) {

  var err = console.error.bind(console);
  var yay = console.log.bind(console);

  // retrieve all
  $http.get("/api/things")
    .then(yay,err)

  // complete CRUD example
  $http.post("/api/things",{name: "hi"})
    .then(function(resp) {
      return $http.put("/api/things/" + resp.data.id,{name: "changed"})
    })
    .then(function(resp) {
      return $http.get("/api/things/" + resp.data.id).then(function(resp) {
        if(resp.data.name !== "changed") throw new Error("Couldn't update/retrieve")
        return resp
      })
    })
    .then(function(resp) {
      return $http.delete("/api/things/" + resp.data.id)
    },err)

});

