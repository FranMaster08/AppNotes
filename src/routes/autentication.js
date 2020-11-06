const express=require('express')
const app=express.Router()
const passport=require('passport')
app.get('/signup',(req,res)=>{
    res.render('auth/singup')


});

app.post('/signup',(req,res)=>{
    passport.authenticate('local.singup',{
        succesRedirect:'/profile',
        failureRedirect:'/singup',
        failureFlash:true
    })
    console.log(req.body);
});

app.get('/profile',(req,res)=>{
  res.send('ok')
});


module.exports=app