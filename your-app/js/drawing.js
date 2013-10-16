app.directive("drawing",function() {
  var $ = angular.element;
  return function link(scope,el,attrs) {
    var width;
    var height;
    var ctx = el[0].getContext("2d")
    scope.$watchCollection(attrs.commands,function(cmds) {
      draw(cmds)
    });

    function clear() {
      ctx.clearRect(0,0,width,height)
    }
    function draw(commands) {
      if(!commands) return;
      var box = el[0].getBoundingClientRect();
      width = box.width;
      height = box.height;
      clear();
      commands.forEach(function(command,i) {
        if(!commandTypes[command.type]) throw new Error("No drawing command of type " + command.type);
        commandTypes[command.type](command)
      });
    }
    var commandTypes = {
      path: function path(command) {
        ctx.beginPath()
        var start = command.points[0];
        ctx.moveTo(start.x * width,start.y * height)
        ctx.strokeStyle = command.strokeStyle
        ctx.lineWidth = command.lineWidth
        command.points.slice(1).forEach(function(p) {
          ctx.lineTo(p.x * width,p.y * height)
        })
        ctx.stroke()
      }
    };
  };
});

app.directive("draw",function($document) {
  var $ = angular.element;
  return function link(scope,el,attrs) {
    var command = [];
    var width;
    var height;
    var started = false;
    var cleanup = [];

    var ctx = el[0].getContext("2d")
    el.on("mousedown",lineStart)

    $document.on("mouseup",lineEnd)
    cleanup.push( function() { $document.off("mouseup",lineEnd) } )
    cleanup.push( scope.$on("$destroy",function() {
      cleanup.forEach(function(x) { x() })
      cleanup = []
    }) )

    function setStrokeStyle() {
      ctx.strokeStyle = scope.$eval(attrs.drawColor) || "blue";
      ctx.lineWidth = scope.$eval(attrs.drawWidth) || 4;
    }

    function coordsToRatios(points) {
      return points.map(function(p) {
        return {x: p.x/width, y: p.y/height }
      })
    }
    function normaliseCoords(evt) {
      return {x: evt.offsetX, y: evt.offsetY}
    }
    function clear() {
      ctx.clearRect(0,0,width,height)
    }
    function lineStart(evt) {
      setStrokeStyle()
      started = true;
      clear()
      ctx.beginPath()
      var box = el[0].getBoundingClientRect()
      width = box.width
      height = box.height
      command = []
      var normed = normaliseCoords(evt)
      ctx.moveTo(normed.x,normed.y)
      command.push(normed)
      el.on("mousemove",lineMove)
      scope.$eval( attrs.ondrawstart )
    }
    function lineMove(evt) {
      var normed = normaliseCoords(evt)
      ctx.lineTo(normed.x,normed.y)
      command.push(normed)
      ctx.stroke()
    }
    function lineEnd(evt) {
      if(!started) return
      started = false;
      ctx.stroke();
      commandFinished()
      el.off("mousemove",lineMove)
      clear()
    }
    function commandFinished() {
      if(command.length < 2) return command = [];
      scope.command = {
        lineWidth: ctx.lineWidth,
        strokeStyle: ctx.strokeStyle,
        points: coordsToRatios(command)
      }
      if(attrs.onpath) {
        scope.$eval( attrs.onpath )
        scope.$digest()
      }
      command = []
    }
  }
})

