let mongoose = require('mongoose');

let Industry = mongoose.model('Industry',{
    industryId: {
        type : Number,
        required: true,
    },

    industryName: {
        type : String,
        required : true
    }
});

module.exports = {Industry};