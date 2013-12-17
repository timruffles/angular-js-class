

var rewrite = angular.module("rewrite",[]);


// <ng-shadow></ng-shadow>  or <div ng-shadow></div>
// <our-a href=""></out-a> -> <span our-a></span> <!-- our-a -->
rewrite.directive("our-a",function() {
  return {
    restrict: "E",
    link: function(scope,element,attrs) {
      element.on("click",function(event) {
        var href = $(this).attr("href")
        if(href === "") event.preventDefault()
      })
    }
  } 
})


