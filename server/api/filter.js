module.exports = function (oApp) {

    var {Usecase} = require('../db/models/usecase.js');

    oApp.get('/api/filter', (req, res) => {
        
        if(req.query.hasOwnProperty('industryId')){
            req.query.industryId = {"$in" : JSON.parse('[' + req.query.industryId + ']')};
        }
        if(req.query.hasOwnProperty('regionId')){
            req.query.regionId = {"$in" : JSON.parse('[' + req.query.regionId + ']')};
        }
        if(req.query.hasOwnProperty('ceeNameId')){
            req.query.ceeNameId = {"$in" : JSON.parse('[' + req.query.ceeNameId + ']')};
        }
        if(req.query.hasOwnProperty('lineOfBusinessId')){
            req.query.lineOfBusinessId = {"$in" : JSON.parse('[' + req.query.lineOfBusinessId + ']')};
        }
        if(req.query.hasOwnProperty('technicalScenarioId')){
            req.query.technicalScenarioId = {"$in" : JSON.parse('[' + req.query.technicalScenarioId + ']')};
        }
        if(req.query.hasOwnProperty('usecaseTypeId')){
            req.query.usecaseTypeId = {"$in" : JSON.parse('[' + req.query.usecaseTypeId + ']')};
        }
        if(req.query.hasOwnProperty('sourceOfUsecaseId')){
            req.query.sourceOfUsecaseId = {"$in" : JSON.parse('[' + req.query.sourceOfUsecaseId + ']')};
        }
        console.log(req.query);
        Usecase.find(req.query).then((usecase) => {
            res.send({usecase});
        }, (err) => {
            res.status(400).send(err);
        })
    });
}