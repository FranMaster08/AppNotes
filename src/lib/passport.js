const passport=require('passport')
const LocalStrategy=require('passport-local').Strategy
const pool=require('../database')
const helpers=require('../lib/helpers')
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
    newUser.password=await helpers.encryptPassword(newUser.password)
    const result=await pool.query(`INSERT INTO users SET ?`,[newUser])
    newUser.id=result.insertId
     done(null,newUser)
}))


 passport.serializeUser((usr,done)=>{
    done(null,usr.id)
})

passport.deserializeUser(async(id,done)=>{
    const rows=await pool.query('SELECT * FROM users WHERE id=?',[id])
    done(null,rows[0])
})