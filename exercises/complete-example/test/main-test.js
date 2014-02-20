describe('your code', function() {
  beforeEach(module("exercise",function($provide) {
    // here we can stub/mock code
  }));
  it('has access to your code', inject(function(dummy) {
    expect(dummy.defined).toEqual(true);
  }));
});

