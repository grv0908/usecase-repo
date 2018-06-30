let mongoose = require('mongoose');

let Link = mongoose.model('Link',{
    
    _id: {
        type : Number,
        required: true,
    },
    
    linkName: {
        type : String,
        required : true
    },

    linkUrl: {
        type: String,
        required: true
    }
});

module.exports = {Link};