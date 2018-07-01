let mongoose = require('mongoose');

let UsecaseType = mongoose.model('UsecaseType',{
    
    _id: {
        type : Number,
        required: true,
    },
    
    usecaseTypeDesc: {
        type : String,
        required : true
    }
});

module.exports = {UsecaseType};