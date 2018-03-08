var express = require('express')
var path=require('path')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World comes heere')
})
 console.log("hi")
 app.use('/mini' , express.static(path.join(__dirname, 'mini')))
 app.use(express.static(__dirname));
 app.use('/jsl',express.static(path.join(__dirname,'jsl')))
 console.log(__dirname)
app.listen(4000)

