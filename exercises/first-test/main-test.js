describe('Tracking', function() {
  var postSpy;
  beforeEach(module("exercise",function($provide) {
    // MOCK & STUB
    postSpy = jasmine.createSpy("httpPost");
    $provide.value("$http",{post: postSpy});
  }));
  it('allows events to be tracked', inject(function(tracking) {
    // if we track the 'watchVideo' event, it increments
    // some count
    
    tracking.event("watchVideo");
    tracking.event("watchVideo");
    var count = tracking.event("watchVideo");

    expect(count).toEqual(3);
  }));
  it('posts to save', inject(function(tracking) {
    // You'll want to use a mock here
    tracking.event("watchVideo");
    tracking.event("watchVideo");
    tracking.save();
    expect(postSpy).toHaveBeenCalled();
  }));
});

