describe('Tracking', function() {

  beforeEach(module("exercise",function($provide) {

  }));

  describe('tracking events', function() {
    it('allows events to be tracked', inject(function(tracking) {
      tracking.event("watch");
      tracking.event("watch");
      tracking.event("watch");
      tracking.event("watch");
      tracking.event("watch");
    }));

    it("returns the number of times we've seent the event", inject(function(tracking) {
      tracking.event("watch");
      tracking.event("watch");
      tracking.event("watch");
      tracking.event("watch");

      var count = tracking.event("watch");
      expect(count).toEqual(5);
    }));
  })

  describe('persisting events', function() {

    var httpBackend;

    beforeEach(inject(function($httpBackend) {
      httpBackend = $httpBackend;
    }));

     afterEach(function() {
       httpBackend.verifyNoOutstandingExpectation();
     });
    

    it('posts to /api/events', inject(function(tracking, $httpBackend) {
       $httpBackend.expectPOST('/api/events')
        .respond(200, {});
       tracking.save();
    }));
  });

});

