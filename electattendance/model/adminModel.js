const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    fname: {
        type: String,
       
    },
    lname: {
        type: String,
       
    },
    email: {
        type: String,
       
    },
    password: {
        type: String,
       
    },
   
   
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Admin', AdminSchema)