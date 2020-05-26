const express = require('express');
const expresslayout = require('express-ejs-layouts');
const parser = require('body-parser');
const port = process.env.PORT||3000;
const app = express();

app.set('view engine', 'ejs' );
app.use(expresslayout);
app.use(parser.urlencoded({extended:true}));
app.use(express.static(__dirname+'/public'));
var edad="17";
app.get('/edificio',(req,res)=>{res.render('pages/edificio');})
app.get('/contacto',(req,res)=>{res.render('pages/contacto')})
app.get('/informacion',(req,res)=>{res.render('pages/informacion')})
app.get('/',(req,res)=>{
    res.render('pages/inicio');
})

app.post('/msg',(req,res)=>{
var nom =req.body.nombre;
var email=req.body.email;
var msg=req.body.msg;
console.log('Nombre: '+nom);
console.log('Correo: '+email);
console.log('mensaje: '+msg);
res.render('pages/inicio');
})

app.listen(port,()=>{
    console.log("Servidor activo");
})