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

        var maxId = 1001;
    
        Usecase.find().sort({'_id':-1}).limit(1).exec(function(err, result) {
            if(result.length!=0){
               // console.log("Incrementing id by 1");
                maxId = result[0]._id + 1;
            }

            var usecase = new Usecase({
                _id:  maxId,
                usecaseName: req.body.usecaseName,
                usecaseDesc: req.body.usecaseDesc,
                ceeNameId: req.body.ceeNameId,
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
    });

    // With joins
    oApp.get('/api/usecase/:id', (req, res) => {

        Usecase.aggregate(
            [
                {
                  $match: {
                      _id: parseInt(req.params.id)
                  }  
                 },
               {
               $lookup:
                 {
                   from: "ceenames",
                   localField : "ceeNameId",
                    foreignField : "_id",
                    as : "ceenames" 
                 }
               },
               {
               $lookup:
                 {
                   from: "industries",
                   localField : "industryId",
                    foreignField : "_id",
                    as : "industries" 
                 }
               },
               {
               $lookup:
                 {
                   from: "lineofbusinesses",
                   localField : "lineOfBusinessId",
                    foreignField : "_id",
                    as : "lineOfBusinesses" 
                 }
               },
               {
               $lookup:
                 {
                   from: "technicalscenarios",
                   localField : "technicalScenarioId",
                    foreignField : "_id",
                    as : "technicalScenarios" 
                 }
               },
               {
               $lookup:
                 {
                   from: "usecasetypes",
                   localField : "usecaseTypeId",
                    foreignField : "_id",
                    as : "usecaseTypes" 
                 }
               },
               {
               $lookup:
                 {
                   from: "sourceofusecases",
                   localField : "sourceOfUsecaseId",
                    foreignField : "_id",
                    as : "sourceOfUsecases" 
                 }
               }  
            ]).then((usecase) => {
            res.send({usecase});
        }, (err) => {
            res.status(400).send(err);
        });
    });



    //     Usecase.findOne({_id:req.params.id}).then((usecase) => {
    //         res.send({usecase});
    //     }, (err) => {
    //         res.status(400).send(err);
    //     });
    // });

    oApp.delete('/api/usecase/:id', (req, res) => {
        Usecase.remove({_id: req.params.id}).then((usecase) => {
            res.send('Successfully deleted');
        }, (err) => {
            res.status(400).send(err);
        });
    });

    oApp.put('/api/usecase/:id', (req, res) => {
        Usecase.update({
            _id: req.params.id,
        }, {
            usecaseName: req.body.usecaseName,
            usecaseDesc: req.body.usecaseDesc,
            regionId: req.body.regionId,
            industryId: req.body.industryId,
            ceeNameId: req.body.ceeNameId,
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