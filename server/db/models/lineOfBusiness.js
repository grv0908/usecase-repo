let mongoose = require('mongoose');

let LineOfBusiness = mongoose.model('LineOfBusiness',{
    
    _id: {
        type : Number,
        required: true,
    },
    
    lineOfBusinessDesc: {
        type : String,
        required : true
    }
});

module.exports = {LineOfBusiness};