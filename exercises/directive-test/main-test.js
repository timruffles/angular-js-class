describe('cookies directive', function() {

  var compile;
  var rootScope;

  beforeEach(module("exercise",function($provide) {
  }));

  beforeEach(inject(function($compile, $rootScope) {
    compile = $compile;
    rootScope = $rootScope;
  }));


  it('when I specify I do not mind about cookies, the message should be hidden',
  inject(function() {

    var templateFn = compile("<cookie-crap></cookie-crap>");
    var el = templateFn(rootScope);


    $(el).find(".yes").click();

    expect($(el).hasClass("ng-hide")).toBe(true);

  }));
});

