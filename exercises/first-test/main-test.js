describe('Tracking', function() {
  var mocked;
  beforeEach(module("exercise",function($provide) {
    mocked = {post: jasmine.createSpy('postSpy')};
    $provide.value('$http',mocked);
  }));
  it('allows events to be tracked', inject(function(tracking) {
    expect(tracking.event('login')).toEqual(1);
    expect(tracking.event('login')).toEqual(2);
  }));

  it('posts to save', inject(function(tracking) {
    tracking.save();
    expect(mocked.post.callCount).toEqual(1);
  }));
});

