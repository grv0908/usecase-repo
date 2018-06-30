let mongoose = require('mongoose');

let CEEName = mongoose.model('CEEName',{
    usecaseTypeId: {
        type : Number,
        required: true,
    },

    ceeName: {
        type : String,
        required : true
    }
});

module.exports = {CEEName};