var fs = require("fs")
var express = require("express")
var autocrud = require("auto-crud")

function createServer(drawings) {
  var app = express()

  app.use(express.bodyParser())

  app.get(/^\/(?!(api|js|tpls|css|foundation))/,function(req,res) {
    res.set('Content-Type', 'text/html')
    fs.readFile("app/index.html",function(e,c) {
      res.send(c)
    })
  })

  app.get("/api/drawings",function(req,res) {
    db.find({},function(err,drawings) {
      if(err) return res.send(500)
      res.send(drawings)
    });
  });
  app.get("/api/drawings/:id",function(req,res) {
    db.findOne({_id: req.params.id},function(err,drawing) {
      if(err) return res.send(500)
      if(!drawing) return res.send(404)
      res.send(drawing);
    })
  });
  app.post("/api/drawings",function(req,res) {
    db.insert(req.body, function (err, doc) {
      if(err) return res.send(500)
      res.send(doc)
    });
  });
  app.delete("/api/drawings/:id",function(req,res) {
    db.remove({_id: req.params.id},{},function(err,removeCount) {
      if(err) return res.send(500)
      if(removeCount < 1) return res.send(404)
      res.send(200);
    })
  });


  app.use(express.static("app"))

  app.listen(8004)
}

var Datastore = require('nedb');
var db = new Datastore({ filename: 'drawings.db', autoload: true });
createServer(db);


