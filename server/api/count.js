module.exports = function (oApp) {

    var {Usecase} = require('../db/models/usecase.js');

    oApp.get('/api/count/industry', (req, res) => {
        Usecase.aggregate(
            [
                {$project: { _id: 0, industryId: 1 } },
                {$unwind: "$industryId" },
                {$group: { _id: "$industryId", count: { $sum: 1 } }},
                {$project: { _id: 0,industryId: "$_id", count: 1},},
                {$sort: { count: -1 } },
                {$lookup: { from: "industries", localField : "industryId", foreignField : "_id", as : "Industry" }}   
            ]
        ).then((count) => {
            res.send(count);
        }, (errr) => {
            res.status(400).send(err);
        });
    });

    oApp.get('/api/count/ceename', (req, res) => {
        Usecase.aggregate(
            [
                {$project: { _id: 0, ceeNameId: 1 } },
                {$unwind: "$ceeNameId" },
                {$group: { _id: "$ceeNameId", count: { $sum: 1 } }},
                {$project: { _id: 0,ceeNameId: "$_id", count: 1},},
                {$sort: { count: -1 } },
                {$lookup: { from: "ceenames", localField : "ceeNameId", foreignField : "_id", as : "CEE" }}   
            ]
        ).then((count) => {
            res.send(count);
        }, (errr) => {
            res.status(400).send(err);
        });
    });

    oApp.get('/api/count/lineOfBusiness', (req, res) => {
        Usecase.aggregate(
            [
                {$project: { _id: 0, lineOfBusinessId: 1 } },
                {$unwind: "$lineOfBusinessId" },
                {$group: { _id: "$lineOfBusinessId", count: { $sum: 1 } }},
                {$project: { _id: 0,lineOfBusinessId: "$_id", count: 1},},
                {$sort: { count: -1 } },
                {$lookup: { from: "lineofbusinesses", localField : "lineOfBusinessId", foreignField : "_id", as : "CEE" }}   
            ]
        ).then((count) => {
            res.send(count);
        }, (errr) => {
            res.status(400).send(err);
        });
    });

    oApp.get('/api/count/region', (req, res) => {
        Usecase.aggregate(
            [
                {$project: { _id: 0, regionId: 1 } },
                {$unwind: "$regionId" },
                {$group: { _id: "$regionId", count: { $sum: 1 } }},
                {$project: { _id: 0, regionId: "$_id", count: 1},},
                {$sort: { count: -1 } },
                {$lookup: { from: "regions", localField : "regionId", foreignField : "_id", as : "CEE" }}   
            ]
        ).then((count) => {
            res.send(count);
        }, (errr) => {
            res.status(400).send(err);
        });
    });

    oApp.get('/api/count/usecaseType', (req, res) => {
        Usecase.aggregate(
            [
                {$project: { _id: 0, usecaseTypeId: 1 } },
                {$unwind: "$usecaseTypeId" },
                {$group: { _id: "$usecaseTypeId", count: { $sum: 1 } }},
                {$project: { _id: 0, usecaseTypeId: "$_id", count: 1},},
                {$sort: { count: -1 } },
                {$lookup: { from: "usecasetypes", localField : "usecaseTypeId", foreignField : "_id", as : "CEE" }}   
            ]
        ).then((count) => {
            res.send(count);
        }, (errr) => {
            res.status(400).send(err);
        });
    });

    oApp.get('/api/count/sourceOfUsecase', (req, res) => {
        Usecase.aggregate(
            [
                {$project: { _id: 0, sourceOfUsecaseId: 1 } },
                {$unwind: "$sourceOfUsecaseId" },
                {$group: { _id: "$sourceOfUsecaseId", count: { $sum: 1 } }},
                {$project: { _id: 0, sourceOfUsecaseId: "$_id", count: 1},},
                {$sort: { count: -1 } },
                {$lookup: { from: "sourceofusecases", localField : "sourceOfUsecaseId", foreignField : "_id", as : "CEE" }}   
            ]
        ).then((count) => {
            res.send(count);
        }, (errr) => {
            res.status(400).send(err);
        });
    });

    oApp.get('/api/count/technicalScenario', (req, res) => {
        Usecase.aggregate(
            [
                {$project: { _id: 0, technicalScenarioId: 1 } },
                {$unwind: "$technicalScenarioId" },
                {$group: { _id: "$technicalScenarioId", count: { $sum: 1 } }},
                {$project: { _id: 0, technicalScenarioId: "$_id", count: 1},},
                {$sort: { count: -1 } },
                {$lookup: { from: "technicalscenarios", localField : "technicalScenarioId", foreignField : "_id", as : "CEE" }}   
            ]
        ).then((count) => {
            res.send(count);
        }, (errr) => {
            res.status(400).send(err);
        });
    });
};