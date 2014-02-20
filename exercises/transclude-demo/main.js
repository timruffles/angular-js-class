var app = angular.module("exercise",[]);

app.directive("transcludeDemo",function() {
  return {
    transclude: "element",
    replace: true,
    template: "<section><div ng-transclude></div></section>",
    compile: function(el,attr,transcludeLink) {
      return function link(scope,el,attrs,controller) {
        transcludeLink(scope,function(clone) {
          // pass an attach function to clone rather than
          // link original transcluded el
          el.append(clone)
        })
        transcludeLink(scope,function(clone) {
          el.append(clone)
        })
      }
    }
  }
});
