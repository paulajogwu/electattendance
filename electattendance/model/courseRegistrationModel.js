const mongoose = require('mongoose');

const RegCourseSchema = new mongoose.Schema({
    courseName: {
        type: String,
       
    },

    firstName: {
        type: String,
        
    },
    lastName: {
        type: String,
        
    },
    email: {
        type: String,
        
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('RegCourse', RegCourseSchema)