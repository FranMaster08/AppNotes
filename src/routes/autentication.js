const express=require('express')
const app=express.Router()

app.get('/aut',(req,res)=>{
    res.send('Hello Auto')
});

module.exports=app