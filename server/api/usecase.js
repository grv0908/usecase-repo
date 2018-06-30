module.exports = function (oApp) {

    var {Usecase} = require('../db/models/usecase.js');

    oApp.get('/api/usecase', (req, res) => {
        console.log(req.query);
        Usecase.find().then((usecase) => {
            res.send({usecase});
        }, (err) => {
            res.status(400).send(err);
        })
    });

    oApp.get('/api/usecases', (req, res) => {
        Usecase.find().then((usecase) => {
            res.send({usecase});
        }, (err) => {
            res.status(400).send(err);
        })
    });

    oApp.post('/api/usecase', (req, res) => {
        var usecase = new Usecase({
            usecaseId: req.body.usecaseId,
            usecaseName: req.body.usecaseName,
            usecaseDesc: req.body.usecaseDesc,
            regionId: req.body.regionId,
            industryId: req.body.industryId,
            lineOfBusinessId: req.body.lineOfBusinessId,
            technicalScenarioId: req.body.technicalScenarioId,
            usecaseTypeId: req.body.usecaseTypeId,
            sourceOfUsecaseId: req.body.sourceOfUsecaseId,
            contactPerson: req.body.contactPerson,
            customerName: req.body.customerName,
            presentationLink: req.body.presentationLink,
            demoLink: req.body.demoLink,
            demoCredentials: req.body.demoCredentials,
            goLive: req.body.goLive
        });
        
        usecase.save().then((usecase) => {
            res.send(usecase);
        }, (err) => {
            res.status(400).send(err);
        });
    });

    oApp.get('/api/usecase/:usecaseId', (req, res) => {
        Usecase.findOne({usecaseId:req.params.usecaseId}).then((usecase) => {
            res.send({usecase});
        }, (err) => {
            res.status(400).send(err);
        });
    });

    oApp.delete('/api/usecase/:usecaseId', (req, res) => {
        Usecase.remove({usecaseId: req.params.usecaseId}).then((usecase) => {
            res.send('Successfully deleted');
        }, (err) => {
            res.status(400).send(err);
        });
    });

    oApp.put('/api/usecase/:id', (req, res) => {
        Usecase.update({
            usecaseId: req.params.usecaseId,
        }, {
            usecaseName: req.body.usecaseName,
            usecaseDesc: req.body.usecaseDesc,
            regionId: req.body.regionId,
            industryId: req.body.industryId,
            lineOfBusinessId: req.body.lineOfBusinessId,
            technicalScenarioId: req.body.technicalScenarioId,
            usecaseTypeId: req.body.usecaseTypeId,
            sourceOfUsecaseId: req.body.sourceOfUsecaseId,
            contactPerson: req.body.contactPerson,
            customerName: req.body.customerName,
            presentationLink: req.body.presentationLink,
            demoLink: req.body.demoLink,
            demoCredentials: req.body.demoCredentials,
            goLive: req.body.goLive,
            
        }).then((usecase) => {
            res.send('updated successfully');
        }, (err) => {
            res.status(400).send(err);
        });
    });
};