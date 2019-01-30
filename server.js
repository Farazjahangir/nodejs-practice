const express = require('express')
const hbs = require('hbs')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const Todos = require('./model/todos-model')

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.set("view engine" , "hbs")
app.use(express.static(__dirname + "/views/assets"))

mongoose.connect('mongodb://localhost:27017/todoApp')


app.get('/' , (req , res)=>{
    res.render('dashboard')
})


app.post('addd-todo' , (req , res)=>{
    console.log(res.body);
    
})


// app.get('/signup' , (req , res)=>{
//     res.render('signup')
// })
// app.get('/dashboard' , (req , res)=>{
//     res.render('dashboard')
// })

// app.post('/signup' , (req ,res)=>{
//     res.send({msg : 'success'})
// })
// app.post('/signIn' , (req , res)=>{
//     const userEmail = 'faraz@faraz.com'
//     const userPass = '1234'

//     const email = req.body.email
//     const password = req.body.password

//     if(email === userEmail && userPass === password){
//         res.send({msg : 'success'})
//     }
//     else{
//         res.send({msg : 'error'})
//     }
    
// })

app.listen(port , ()=>{
    console.log("Server is running on PORT" , port);
    
})