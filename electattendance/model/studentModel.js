const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    firstName: {
        type: String,
       
    },
    middleName: {
        type: String,
       
    },
   
    lastName: {
        type: String,
        
    },
    email: {
        type: String,
        
    },
    phone: {
        type: String,
        
    },
    dateOfbirth: {
        type: String,
        
    },
    department: {
        type: String,
        
    },

    matricNo: {
        type: String,
        
    },

    faculty: {
        type: String,
        
    },
    gender: {
        type: String,
        
    },
    image: {
        type: String,
        
    },
    fingerPrint:   {
        type: String
    },
    
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Student', StudentSchema)