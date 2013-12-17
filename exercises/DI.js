
// assumes User is present in global scope
function UserController() {
  var db = $DB
}


// ## injecting/controlling dependency ##

// via constructor:

// problem - confuses API: in normal code
// we don't need to inject, only in tests
function UserControllerInjected(DB) {
  this.db = DB
}

// via prototype method:

// making the dependency access via a prototype
// method makes it easier to swap out. We make a subtype
// of our constructor and modify its prototype, or simply
// swap the method out
function UserControllerInjected() {
  // before: var db = $DB
  var db = this.getDatabase();
}
UserControllerInjected.prototype.getDatabase = function() {
  return $DB;
}


// angularjs way:

// we move the definition of our types into a factory function
// that takes dependencies as arguments

// <html ng-app=fancyApp>
var module = angular.module("fancyApp",["ngRoute"]);

module.factory("DB",function() {
  // here we're defining the real DB dependency
  return DATABASE;
})
module.factory("userController",function(DB) {
  // now DB is being given to our type definition
  // via angular, and we can swap out or decorate DB
  function UserController() {
    var db = DB
  }
  return UserController;
})

// <div ng-controller=userController></div>

/*
 * class UserControllerInjected
 *   def initialize
 *     userConstructor = getUserConstructor()
 *   end
 *   def getUserConstructor
 *   end
 * end
 *
 **/


// using AngularJS's module system with require.js's module loader:

define([
  "vendor/angular",
  "vendor/angular-route",
  "my-other-module"
],function(
  angular,
  angularRoute,
  myOtherModule
) {

  var module = angular.module("fancyModule",["myOtherModule","ngRoute"]);

  module.factory("something",function(somethingFromMyOtherModule) {
  })

  module.controller("user",function($route) {
  })

  return module;

})
