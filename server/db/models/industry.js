let mongoose = require('mongoose');

let Industry = mongoose.model('Industry',{
    
    _id: {
        type : Number,
        required: true,
    },
    
    industryName: {
        type : String,
        required : true
    }
});

module.exports = {Industry};