describe('Tracking', function() {
  
  var called;
  
  beforeEach(module("exercise",function($provide) {
    $provide.value("$http",{
      post: function() {
        called = true;
      }
    });
  }));
  
  
  it('allows events to be tracked', 
    inject(function(tracking) {
      tracking.save();
      assert(called,"expected $http post to be called")
  }));
  it('posts to save', inject(function(tracking) {
  }));
});

