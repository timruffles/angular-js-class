describe('Tracking', function() {

  beforeEach(module("exercise",function($provide) {
    // mock n stub
    var postSpy = jasmine.createSpy("httpPost");

    // provide a fake version of http
    $provide.value("$http", {
      post: postSpy,
    });

  }));

  it('tracks events to server', inject(function(tracking, $http) {

    tracking.event("watch");
    tracking.event("watch");
    tracking.event("watch");

    tracking.save();

    expect($http.post).toHaveBeenCalledWith("/api/track", {watch: 3});

  }));

});

