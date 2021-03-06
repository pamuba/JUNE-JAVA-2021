const express = require('express')
const path = require('path')

const api = require('./server/routes/api')

const app = express()
app.use(express.json())

app.use(express.static(path.join(__dirname, 'dist')))

app.use('/api', api)

app.get('**', (req, res)=>{
    res.sendFile(path.join(__dirname, 'dist/index.html'))
})

app.listen(3000, function(){
    console.log("Server is listening @3000")
})