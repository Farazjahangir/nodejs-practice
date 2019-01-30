// const mongoose = require('mongoose')
// const mongoose  = require('../db/monoose')

const mongoose = require('../db/monoose')

const Todos = mongoose.model('Todos' , {
    todo : {
        type : String
    },
    created_at : {
        type : Date,
        default : Date.now()
    }
})

module.exports =  Todos