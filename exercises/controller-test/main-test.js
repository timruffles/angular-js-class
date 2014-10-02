describe('preferences controller', function() {

  var scope;
  var ctrl;

  beforeEach(module("exercise",function($provide) {
    $provide.value("Preferences", {
      update: jasmine.createSpy("Preferences.update"),
    });
  }));

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new()
    scope.prefsForm = { $valid: false };

    ctrl = $controller("PreferencesCtrl", {
      $scope: scope
    }) 

    scope.$apply();
  }));
    

  it('automatically saves the user\'s data when the form is valid',
    inject(function(Preferences) {

    scope.$apply(function() {
      scope.prefsForm.$valid = true;
    });

    expect(Preferences.update).toHaveBeenCalled();


  }));
});

