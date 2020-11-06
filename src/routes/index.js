const express=require('express')
const app=express.Router()

app.get('/',(req,res)=>{
    res.send('Hello Word')
});
app.use('/links',require('./links'))
app.use(require('./autentication'))
module.exports=app

