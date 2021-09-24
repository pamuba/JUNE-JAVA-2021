var express = require('express')
var app = express()

// app.get("/", function(req, res){
//     res.send("Hello World from the SERVER")
// });
app.use(express.static(__dirname+"/public"))

app.listen(3000, function(err){
    if(err)
        console.log("Error Starting the Server")
    else 
        console.log("Server started @3000")
});