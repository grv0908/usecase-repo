let mongoose = require('mongoose');

let LineOfBusiness = mongoose.model('LineOfBusiness',{
    lineOfBusinessId: {
        type : Number,
        required: true,
    },

    lineOfBusinessDesc: {
        type : String,
        required : true
    }
});

module.exports = {LineOfBusiness};