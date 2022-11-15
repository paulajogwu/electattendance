const mongoose = require('mongoose');

const AttendSchema = new mongoose.Schema({
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
    atDate: {
        type: String,
        
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Attendance', AttendSchema)