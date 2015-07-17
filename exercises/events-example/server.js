"use strict";

var PORT = process.env.PORT || 8080;

var http = require("http");
var fs = require("fs");
var url = require('url');

var server = http.createServer(function(request, response) {

  var parts = url.parse(request.url);
  
  var rs = fs.createReadStream(__dirname + parts.path)

  rs.on("error", function() {
    fs.createReadStream(__dirname + "/index.html")
      .pipe(response);
  });

  rs.pipe(response);
});


server.listen(PORT, function() {
   console.log("listening on ", PORT);
})
