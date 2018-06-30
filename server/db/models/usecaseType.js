let mongoose = require('mongoose');

let UsecaseType = mongoose.model('UsecaseType',{
    usecaseTypeId: {
        type : Number,
        required: true,
    },

    usecaseTypeDesc: {
        type : String,
        required : true
    }
});

module.exports = {UsecaseType};