let mongoose = require('mongoose');

let UsecaseType = mongoose.model('UsecaseType',{
    usecaseTypeDesc: {
        type : String,
        required : true
    }
});

module.exports = {UsecaseType};