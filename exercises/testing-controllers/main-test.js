describe('controller test', function() {

  beforeEach(module("exercise"));

  var controller;
  var scope;

  beforeEach(inject(function(
    $controller
    , $rootScope    
  ) {

    scope = $rootScope.$new();

    controller = $controller("ToggleCtrl", {
      $scope: scope,
    });

    scope.$apply();
  }));

  it('toggles opted in', inject(function() {
    expect(scope.user.optedIn).toEqual(false);

    controller.optIn();

    expect(scope.user.optedIn).toEqual(true);
  }));

  it("informs user repo whenever user's opt in state changes", 
  inject(function(UserRepo) {
    var spy = UserRepo.opted = jasmine.createSpy("opted");
    // TODO ensure that when user.optedIn changes, with/without calling optIn(), we talk to the UserRepo service
    controller.optIn();
    scope.$apply();
    // TODO hint: mocking might be best way here
    //
    expect(spy).toHaveBeenCalled();
  }));
});

