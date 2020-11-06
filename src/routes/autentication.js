const express=require('express')
const app=express.Router()
const passport=require('passport')
app.get('/signup',(req,res)=>{
    res.render('auth/singup')


});



app.post('/signup',passport.authenticate('local.singup',{
    successRedirect:'/profile',
    failureRedirect:'/signup',
    failureFlash:true
}));

app.get('/profile',(req,res)=>{
  res.send('ok')
});


module.exports=app