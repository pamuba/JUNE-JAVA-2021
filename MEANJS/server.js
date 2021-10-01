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

//delete
app.delete('/contactlist/:id', function(req, res){
    var id = req.params.id
    db.contactlist.remove({_id: mongojs.ObjectId(id)}, function(err, doc){
        res.json(doc)
    })
})


app.listen(3000, function(err){
    if(err)
        console.log("Error Starting the Server")
    else 
        console.log("Server started @3000")
});

app.get('/contactlist/:id', function(req, res){
    var id = req.params.id
    db.contactlist.findOne({_id:mongojs.ObjectId(id)}, function(err, doc){
        if(err)
            console.log("Error Fetching Data")
        else 
            res.json(doc)
    })
})

app.put('/contactlist/:id', function(req, res){
    var id = req.params.id
    db.contactlist.findAndModify({query:{_id:mongojs.ObjectId(id)},
        update:{$set:{name:req.body.name, email:req.body.email, number:req.body.number}},
        new:true}, function(err, doc){
            if(err)
                console.log("Error Fetching Data")
            else 
                res.json(doc)
    })
})