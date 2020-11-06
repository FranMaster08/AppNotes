const express=require('express')
const morgan = require('morgan')
const exphbs=require('express-handlebars')
const path = require('path');
const flash=require('connect-flash')
const { json } = require('express');
const session=require('express-session')
const Sqlsession=require('express-mysql-session')
const db=require('./keys')
const app=express()
//Inicializaciones
//settings
app.set('port',process.env.PORT || 4000)
app.set('views',path.join(__dirname,'views'))
app.engine('.hbs',exphbs({
    defaultLayout:'main',
    layoutsDirconst :path.join(app.get('views'),'layout'),
    partialsDir:path.join(app.get('views'),'partials'),
    extname:'.hbs',
    helpers:require('./lib/handlebars')
}))

app.set('view engine','.hbs')
//Middleware
app.use(session({
    secret:'FranciscoPrueba',
    resave:false,
    saveUninitialized:false,
    store: new Sqlsession(db)
}))
app.use(flash())
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}))
app.use(express.json())
//Global Variables
app.use((req,res,next)=>{
    app.locals.success=req.flash('success')
    next()
})
//routes
app.use(require('./routes/index'))
//publics
app.use(express.static(path.join(__dirname,'public')))
//start
app.listen(app.get('port'),()=>{
    console.log(`Server runing in Port:${app.get('port')}`);
})






