let mongoose = require('mongoose');

let Region = mongoose.model('Region',{
    regionId: {
        type : Number,
        required: true,
    },

    regionName: {
        type : String,
        required : true
    }
});

module.exports = {Region};