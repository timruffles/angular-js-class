var app = angular.module("slides",[]);

app.directive("codeSample",function($compile) {
  var tpl = "<div class=code-sample><div class='target'></div><code>{{ code }}</code></div>";
  var samples = 0;
  return {
    scope: {},
    compile: function(el,attr,transcludeFn) {
      var div = angular.element("<div></div>")
      var controller = angular.element(el[0].querySelector('.controller')).remove()
      
      var code = el.html().replace(/&quot;/g,'"')
      code = formatLines(code.split("\n")).join("\n")
      ;[].forEach.call(el.children(),function(child) {
        el.remove(child)
        div.append(child)
      });
      // el is our el in the dom
      return function(scope, $element, attr) {
        scope.code = code
        if(controller.length > 0) {
          var controllerCode = controller.html()
          var name = "demo" + (samples++);
          var module = angular.module(name,[]);
          var fn = new Function("module",controllerCode);
          fn(module);
          var runController = function(controller,$controller) {
            $controller(controller,{$scope: scope})
          }
          runController.$inject = ['clicking','$controller']
          angular.injector(name).inject(runController)
        }
        var templateLink = $compile(tpl);
        var contentLink = $compile(div)
        var tplEl = templateLink(scope)
        var contentEl = contentLink(scope)
        var parent = $element.parent()
        $element.replaceWith(tplEl);
        var p = parent[0]
        angular.element(p.querySelector('.target')).replaceWith(contentEl)
      }
    }
  }
});


function formatLines(lines) {
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
  })
}


