const mongoose = require('mongoose');

const FacultySchema = new mongoose.Schema({
    name: {
        type: String,
       
    },
    description: {
        type: String,
       
    },
   
   
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Faculty', FacultySchema)