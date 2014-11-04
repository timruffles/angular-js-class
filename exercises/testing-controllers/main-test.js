describe('controller test', function() {

  beforeEach(module("exercise"));

  var controller;
  var scope;

  beforeEach(inject(function() {
    // TODO get access to our controller
    // TODO create a scope
    // TODO create an instance
  }));

  it('toggles opted in', inject(function() {
    // TODO test methods on controller as usual
  }));

  it("informs user repo whenever user's opt in state changes", inject(function() {
    // TODO ensure that when user.optedIn changes, with/without calling optIn(), we talk to the UserRepo service
    // TODO hint: mocking might be best way here
  }));
});

