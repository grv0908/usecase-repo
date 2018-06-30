let mongoose = require('mongoose');

let TechnicalScenario = mongoose.model('TechnicalScenario',{
    technicalScenarioId: {
        type : Number,
        required: true,
    },

    technicalScenarioDesc: {
        type : String,
        required : true
    }
});

module.exports = {TechnicalScenario};