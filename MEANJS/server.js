var express = require('express')
var mongojs = require('mongojs')
var db = mongojs('contactlist',['contactlist'])
var app = express()
app.use(express.json())


app.use(express.static(__dirname+"/public"))

//get
app.get('/contactlist', function(req, res){
  
    db.contactlist.find(function(err, docs){
        if(err)
            console.log("Error Starting the Server")
        else 
            res.json(docs)
    })
    
})

//post
app.post('/contactlist', function(req, res){
    db.contactlist.insert(req.body, function(err, doc){
        res.json(doc)
    })
})

app.listen(3000, function(err){
    if(err)
        console.log("Error Starting the Server")
    else 
        console.log("Server started @3000")
});