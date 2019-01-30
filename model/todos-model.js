const mongoose = require('mongoose')


const Todos = mongoose.model('Todos' , {
    text : {
        type : String
    },
    created_at : {
        type : Date,
        default : Date.now()
    }
})

module.export =  Todos