const mongoose = require('mongoose');

const DepartmentSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Department', DepartmentSchema)