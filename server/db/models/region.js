let mongoose = require('mongoose');

let Region = mongoose.model('Region',{
    
    _id: {
        type : Number,
        required: true,
    },
    
    regionName: {
        type : String,
        required : true
    }
});

module.exports = {Region};