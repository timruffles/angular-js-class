describe('Tracking', function() {

  beforeEach(module("exercise",function($provide) {
    var count = 0;
    $provide.value(
      "$http",
      { 
        post: function(url, data) {
          if(++count > 1) {
            throw new Error("called too many times!");
          }

          expect(url).to.match(/https?:/.test(url));
        }
      }
    );
  }));

  it('posts to save with correct counts', inject(function(tracking, $http) {

    tracking.event("watch");
    tracking.event("watch");


    tracking.save();
    expect($http.post).toHaveBeenCalledWith(
      customMatchers.url,
      { watch: 2 }   
    );

  }));
});

