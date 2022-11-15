const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    name: {
        type: String,
       
    },
    department: {
        type: String,
       
    },
   
    faculty: {
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

module.exports = mongoose.model('Course', CourseSchema)