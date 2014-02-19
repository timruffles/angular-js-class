/* here is our code using our service */
app.controller("someCtrl",function(tracking) {
  $scope.likedContent = function(content) {
    /* use our service */
    tracking.event("liked-" + content.id);
  };
});

/* below are three equivalent ways of defining the tracking service */


// a service is shorthand that uses a function designed to be
// invoked via the `new` keyword to create the service object
app.service("tracking",function TrackingAsService($http) {
  var observed = {};
  this.event = function(event) {
    var current = observed[event];
    return observed[event] = current ? current + 1 : 1;
  };
  this.save = function() {
    $http.post("/track",observed);
  };
});

// the factory shorthand is a simple function that is called
// with its dependencies, and returns the service object
app.factory('tracking',function TrackingAsFactory($http) {
  var observed = {};
  return {
    event: function(event) {
      var current = observed[event];
      return observed[event] = current ? current + 1 : 1;
    },
    save: function() {
      $http.post("/track",observed);
    }
  };
});

// the provider gives the most control. The `$get` function
// will be invoked to actually create the service, and is 
// equivalent to the function passed to `factory`.
app.provider("tracking",function TrackingProvider() {
  
  var trackingUrl = "/track";
  this.setTrackingUrl = function(url) {
    trackingUrl = url;
  };
  
  this.$get = function($http) {
    var observed = {};
    return {
      event: function(event) {
        var current = observed[event];
        return observed[event] = current ? current + 1 : 1;
      },
      save: function() {
        $http.post(trackingUrl,observed);
      }
    };
  };
});

app.config(function(trackingProvider) {
  trackingProvider.setTrackingUrl("/trackEvent");
});

// the constant/value methods are for values that don't rely on other services
// - normal scalar types like strings and numbers, or perhaps for config objects

// available for use in configuration functions - we could use this in a route for instance
app.constant("ADMIN_USER","admin");

// we can override this in tests etc, but not available in config functions
app.value("ADMIN_USER","admin");


