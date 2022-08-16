const express = require('express')
const mongoose = require('mongoose')
const app =new express()
const model =require('../restapi/model/modeldata')
const data = require('../restapi/services/data')
const body =require('body-parser')
const route = require("./router/route")
const bodyParser = require('body-parser')
const port =5001
const std_url ='mongodb://localhost:27017/stdData'
app.use(bodyParser.json())
app.use(express.json())
app.use("/", route)
mongoose.connect(std_url)
const database= mongoose.connection
database.once('open',_ =>{
   console.log(`database connected:`,std_url);
})
database.on(`error`,err => {
   console.log(`connection error`,err);
})

app.listen(port,() => {
   console.log(`server listening at localhost:${port}`);
})
