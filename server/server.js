const express = require('express')
const hbs = require('hbs')
const app = express()
const port = 3000
const Todos = require('./model/Todos')

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.set("view engine" , "hbs")
app.use(express.static(__dirname + "/views/assets"))



app.get('/' , (req , res)=>{
        Todos.find({})
            .then((todo)=>{
                res.render('dashboard' , {todo})
            })         
})


app.post('/add-todo' , (req , res)=>{
    const newTodo = new Todos({todo : req.body.todo})
    newTodo.save((err , success)=>{
        if(err){
            return console.log("ERR" , err);
            
        }
        console.log('SUCCESS' , success);   
        res.send({msg : 'success'})
    })
    
})
app.post('/deletetodo' , (req , res)=>{
    Todos.findByIdAndDelete({_id : req.body.key})
        .then(()=>{
            res.send({msg :  "Success"})
        })
})

app.post('/edit' , (req, res)=>{
    Todos.findOneAndUpdate({_id : req.body.key} , {todo : req.body.newText})
        .then((t)=>{
            console.log(t);
            
        })
        
    
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