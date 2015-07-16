describe('flash directive', function() {

  beforeEach(module("exercise"));

  var compileEl;
  var scope;
  var el;

  beforeEach(inject(function(
    $compile
    , $rootScope
  ) {
    scope = $rootScope.$new();

    var linkFn = $compile("<div><div flash></div></div>");
    el = linkFn(scope);
  }));

  it('removes element on click', inject(function() {
    expect(el.find("[flash]").length).toBe(1);

    el.find("[flash]").click();

    expect(el.find("[flash]").length).toBe(0);
  }));
});

