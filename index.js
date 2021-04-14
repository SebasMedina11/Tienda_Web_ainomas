const express = require('express')
const app = express()
const bodyParser= require('body-parser')
const mongoose= require('mongoose')
const ProductSchema= require('./schemas/schema_mongoose')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.get('/api/inicio',(req,res)=>{
  res.send('Inicio');  
})

app.post('api/signUp',(req,res)=>{
  res.send('Inicio sesion');
})

app.post('api/signIn',(req,res)=>{
  res.send('Registrarse');
})
app.get('api/item',(req,res)=>{
 })
app.get('/api/item/:productId',(req,res)=>{

})
app.post('api/addProduct',(req,res)=>{
  console.log('POST /api/product')
  console.log(req.body)


  let producto= new ProductSchema()
  producto.name=req .body.name
  producto.picture=req.body.picture
  producto.price=req.body.price
  producto.category= req.body.price
  producto.description=req.body.description
  
})
app.delete('api/borrado',(req,res)=>{
  res.send('Borrado');
})

mongoose.connect('mongodb://localhost:27017/shop',{useNewUrlParser: true, useUnifiedTopology: true},(err,res)=>{
  if(err) throw err;
  console.log('se conecto')
})
app.listen(3000, ()=>{
  console.log("Server in port 3000")  
})
