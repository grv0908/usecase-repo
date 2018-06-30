let mongoose = require('mongoose');

let CEEName = mongoose.model('CEEName',{
    
    _id: {
        type : Number,
        required: true,
    },
    
    ceeName: {
        _id: Number,
        type : String,
        required : true
    }
});

module.exports = {CEEName};