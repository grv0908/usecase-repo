let mongoose = require('mongoose');

let Usecase = mongoose.model('Usecase',{
    _id: {
        type: Number,
        required: true
    },
    usecaseName: {
        type : String,
        required : true
    },
    usecaseDesc: {
        type : String,
        required : true
    },
    regionId: {
        type: Array,
        required: true
    },
    ceeNameId: {
        type: Array,
        required: true
    },
    industryId: {
        type: Array,
        required: true
    },
    lineOfBusinessId: {
        type: Array,
        required: true
    },
    technicalScenarioId: {
        type: Array,
        required: true
    },
    usecaseTypeId: {
        type : Array,
        required : true
    },
    sourceOfUsecaseId: {
        type : Array,
        required : true
    },
    contactPerson: {
        type : String,
    },
    customerName: {
        type : String,
    },
    presentationLink: {
        type : String,
    },
    demoLink: {
        type : String,
    },
    demoCredentials: {
        type : String,
    },
    goLive: {
        type : Boolean,
    }
});

module.exports = {Usecase};