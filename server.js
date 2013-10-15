var fs = require("fs")

var express = require("express")

var app = express()

app.get(/^\/(?!(js|tpls|css|foundation))/,function(req,res) {
  res.set('Content-Type', 'text/html')
  fs.readFile("app/index.html",function(e,c) {
    res.send(c)
  })
})

app.use(express.static("app"))

app.listen(8004)
