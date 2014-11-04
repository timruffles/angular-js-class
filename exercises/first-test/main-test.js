describe('Tracking', function() {

  beforeEach(module("exercise",function($provide) {
    $provide.value("$http", {
      post: jasmine.createSpy("postSpy"),
    });
  }));

  it('allows events to be tracked', inject(function(tracking) {

    tracking.event("watch");
    tracking.event("watch");
    var count = tracking.event("watch");

    expect(count).toEqual(3);
  }));

  it('posts to save tracking data', inject(function(tracking, $http) {

    tracking.event("watch");
    tracking.event("watch");
    tracking.event("watch");

    tracking.save();

    expect($http.post)
      .toHaveBeenCalledWith("/api/tracking", { watch: 3 });
  }));
});

