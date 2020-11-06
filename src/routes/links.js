const express=require('express')
const app=express.Router()
const pool=require('../database')
app.get('/add',(req,res)=>{
    res.render('links/add')
});
app.post('/add',async(req,res)=>{
    const body=req.body
    console.log(body);
    await pool.query(`INSERT INTO links
                 SET ?`,[body])
    req.flash('succes','Se agrego Link Con Exito')
    res.redirect('/links')
});
app.get('/',async(req,res)=>{
    const enlaces=await pool.query('SELECT * FROM links')
    console.log(enlaces);
    res.render('links/links',{enlaces})

});
app.get('/delete/:id',async (req,res)=>{
    const {id}=req.params
    await pool.query(`delete from links where id=? `,[id])
    res.redirect('/links')
});
app.get('/edit/:id',async(req,res)=>{
    const {id}=req.params
    const enlaces=await pool.query(`SELECT * FROM links Where id=?`,[id])
     res.render('links/edit',{links:enlaces[0]})
});
app.post('/edit/:id',async(req,res)=>{
    const {id}=req.params
    const {title,description,url}=req.body
    const enlaces=await pool.query(`UPDATE links set ? WHERE id=? `,[req.body,id])
    res.redirect('/links')
});
module.exports=app