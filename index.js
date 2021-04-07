const express = require('express')
const app = express()

app.get('/Inicio',(req,res)=>{
  res.send('Inicio');
  res.render('/scr/index.html');
})

app.get('/SignUp',(req,res)=>{
  res.send('Inicio sesion');
})

app.get('/SignIn',(req,res)=>{
  res.send('Registrarse');
})
app.post('/Cambio',(req,res)=>{
  res.send('Cambiado')
})
app.delete('/Borrado',(req,res)=>{
  res.send('Borrado');
})
app.listen(3000, ()=>{
  console.log("Server in port 3000")
})