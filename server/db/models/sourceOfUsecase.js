let mongoose = require('mongoose');

let SourceOfUsecase = mongoose.model('SourceOfUsecase',{
    sourceOfUsecaseId: {
        type : Number,
        required: true,
    },

    sourceOfUsecaseDesc: {
        type : String,
        required : true
    }
});

module.exports = {SourceOfUsecase};