const express = require('express')
const hbs = require('hbs')
const app = express()
const port = 3000


app.set("view engine" , "hbs")
app.use(express.static(__dirname + "/views/assets"))

app.get('/' , (req , res)=>{
    res.render('index')
})
app.get('/signup' , (req , res)=>{
    res.render('signup')
})
app.listen(port , ()=>{
    console.log("Server is running on PORT" , port);
    
})