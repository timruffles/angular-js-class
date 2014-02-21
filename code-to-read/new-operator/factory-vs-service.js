


var eventTracker = {
  events: {},
  save: function() {
    $http.post("/events",this.events);
  }
};

app.factory("Events",function providerFn($http){
  function Events() {
   this.events = {}
  }
  Events.prototype.save = function() {
      $http.post("/events",this.events);
  };
  return Events;
});

app.factory("events",function providerFn($http){
  return {
    events: {},
    save: function() {
      $http.post("/events",this.events);
    }
  }
});

app.service("events",function providerFn(fooBarBaz){
  this.events = {};
  this.save = function() {
    $http.post("/events",this.events);
  }
});







function factory(name,providerFn) {
  var service = providerFn(dep,dep2,dep3);
  cache[name] = service;
}

function service(name,providerFn) {
  var service = new providerFn(dep,dep2,dep3);
  cache[name] = service;
}












