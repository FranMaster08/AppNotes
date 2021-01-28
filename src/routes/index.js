const express=require('express')
const app=express.Router()

app.use('/',require('./links'))
app.use(require('./autentication'))
module.exports=app

