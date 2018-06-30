let mongoose = require('mongoose');

let SourceOfUsecase = mongoose.model('SourceOfUsecase',{
    
    _id: {
        type : Number,
        required: true,
    },
    
    sourceOfUsecaseDesc: {
        type : String,
        required : true
    }
});

module.exports = {SourceOfUsecase};