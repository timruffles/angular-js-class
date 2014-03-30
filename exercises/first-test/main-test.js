describe('Tracking', function() {
  var postSpy;
  // means 'angular - I want to test the exercise module...
  beforeEach(module("exercise",function($provide) {
    // ...but I'm going to give you the values of some 
    // services, probably to replace some with fakes!
    postSpy = jasmine.createSpy("postSpy");
    $provide.value("$http",{
      post: postSpy
    });
  }));
  
  it('allows events to be tracked', inject(function(tracking) {
    tracking.event("watch");
    tracking.event("watch");
    var countOnThirdEvent = tracking.event("watch");
    expect(countOnThirdEvent).toEqual(3);
  }));
  
  it('posts to save', inject(function(tracking) {
    tracking.event("watch");
    tracking.event("watch");
    tracking.save();
    expect(postSpy).toHaveBeenCalledWith("/events",{
      watch: 2
    });
  }));
});













