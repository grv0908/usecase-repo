let mongoose = require('mongoose');

let TechnicalScenario = mongoose.model('TechnicalScenario',{
    _id: {
        type : Number,
        required: true,
    },

    technicalScenarioDesc: {
        type : String,
        required : true
    }
});

module.exports = {TechnicalScenario};