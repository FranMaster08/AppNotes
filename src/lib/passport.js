const passport=require('passport')
const LocalStrategy=require('passport-local').Strategy
require('../database')

passport.use('local.singup',new  LocalStrategy({
    usernameFiled:'username',
    passwordFiled:'password',
    passReqToCallback:true

},async(req,username,password,done)=>{
    const newUser={
        username,
        password,
        fullname:req.body.fullname
    }




}))


// passport.serializeUser((usr,done)=>{

// })