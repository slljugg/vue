const express = require('express')
const app = express()
const port = 3010

app.use(express.static(__dirname + '/static/'))

app.use('/new-product/new-vote',(req,res,next) => {
  res.sendFile(__dirname + '/vue-router-embed.html')
})

app.listen(port,()=> {
  console.log(port)
})