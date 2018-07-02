module.exports = function (oApp) {

    var {TechnicalScenario} = require('../db/models/technicalScenario.js');

    oApp.get('/api/technicalScenarios', (req, res) => {
        TechnicalScenario.find().then((technicalScenarios) => {
            res.send({technicalScenarios});
        }, (err) => {
            res.status(400).send(err);
        })
    });

    oApp.post('/api/technicalScenario', (req, res) => {

        var maxId = 1;
        TechnicalScenario.find().sort({'_id':-1}).limit(1).exec(function(err, result) {
            if(result.length != 0){
                maxId = result[0]._id + 1;
            }
            
            var technicalScenario = new TechnicalScenario({
                _id: maxId,
                technicalScenarioDesc : req.body.technicalScenarioDesc
            });
    
            technicalScenario.save().then((technicalScenario) => {
                res.send(technicalScenario);
            }, (err) => {
                res.status(400).send(err);
            });
        });
    });

    oApp.get('/api/technicalScenario/:id', (req, res) => {
        TechnicalScenario.findOne({_id:req.params.id}).then((technicalScenario) => {
            res.send({technicalScenario});
        }, (err) => {
            res.status(400).send(err);
        });
    });

    oApp.delete('/api/technicalScenario/:id', (req, res) => {
        TechnicalScenario.remove({_id: req.params.id}).then((technicalScenario) => {
            res.send('Successfully deleted');
        }, (err) => {
            res.status(400).send(err);
        });
    });

    oApp.put('/api/technicalScenario/:id', (req, res) => {
        TechnicalScenario.update({
            _id: req.params.id,
        }, {
            technicalScenarioDesc: req.body.technicalScenarioDesc
        }).then((technicalScenario) => {
            res.send('updated successfully');
        }, (err) => {
            res.status(400).send(err);
        });
    });
};