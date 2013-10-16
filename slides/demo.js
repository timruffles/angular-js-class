var app = angular.module("slides",[]);

app.directive("codeSample",function($compile) {
  var tpl = "<div class=code-sample><div class='target'></div><code>{{ code }}</code><code class=controller ng-show='controllerCode != null'>{{controllerCode}}</code></div>";
  var samples = 0;
  var $ = angular.element
  return {
    scope: {},
    compile: function(el,attr,transcludeFn) {
      var parsed = $("<div>" + el.html() + "</div>")
      var controller = angular.element(parsed[0].querySelector('.controller')).remove()
      var code = parsed.html().replace(/&quot;/g,'"')
      code = formatLines(code)
      // el is our el in the dom
      return function(scope, $element, attr) {
        scope.code = code
        if(controller.length > 0) {
          var controllerCode = controller.html()
          scope.controllerCode = formatLines(controllerCode)
          var name = "demo" + (samples++);
          var fn = new Function("module",controllerCode);
          fn(app);
        } 
        angular.injector(["ng","slides"]).invoke(function($compile) {
          var templateLink = $compile(tpl);
          var contentLink = $compile(parsed)
          var tplEl = templateLink(scope)
          var contentEl = contentLink(scope)
          var parent = $element.parent()
          $element.replaceWith(tplEl);
          var p = parent[0]
          angular.element(p.querySelector('.target')).replaceWith(contentEl)
        })
      }
    }
  }
});
app.directive("codeExample",function($compile) {
  return function(scope,el) {
    var code = angular.element("<div class=code-sample><code></code></div>")
    var src = formatLines(el.html())
    code[0].querySelector("code").innerText = src;
    el.replaceWith(code)
  }
});


function formatLines(src) {
  var lines = src.split("\n")
  lines = lines.filter(function(l) {
    return !/^\s*$/.test(l)
  })
  var ws = lines.map(function(line) {
    return line.match(/^\s*/)[0].length
  })
  var min = Math.min.apply(null,ws)
  if(!min === 0) return lines
  return lines.map(function(line) {
    return line.slice(min)
  }).join("\n")
}


