module.exports = function (oApp) {

    var {UsecaseType} = require('../db/models/usecaseType.js');

    oApp.get('/api/usecaseTypes', (req, res) => {
        UsecaseType.find().then((usecaseTypes) => {
            res.send({usecaseTypes});
        }, (err) => {
            res.status(400).send(err);
        })
    });

    oApp.post('/api/usecaseType', (req, res) => {

        var maxId = 1;
        UsecaseType.find().sort({'_id':-1}).limit(1).exec(function(err, result) {
            if(result.length != 0){
                maxId = result[0]._id + 1;
            }
            
            var usecaseType = new UsecaseType({
                _id: maxId,
                usecaseTypeDesc : req.body.usecaseTypeDesc
            });
    
            usecaseType.save().then((usecaseType) => {
                res.send(usecaseType);
            }, (err) => {
                res.status(400).send(err);
            });
        });
    });

    oApp.get('/api/usecaseType/:id', (req, res) => {
        UsecaseType.findOne({_id:req.params.id}).then((usecaseType) => {
            res.send({usecaseType});
        }, (err) => {
            res.status(400).send(err);
        });
    });

    oApp.delete('/api/usecaseType/:id', (req, res) => {
        UsecaseType.remove({_id: req.params.id}).then((usecaseType) => {
            res.send('Successfully deleted');
        }, (err) => {
            res.status(400).send(err);
        });
    });

    oApp.put('/api/usecaseType/:id', (req, res) => {
        UsecaseType.update({
            _id: req.params.id,
        }, {
            usecaseTypeDesc: req.body.usecaseTypeDesc
        }).then((usecaseType) => {
            res.send('updated successfully');
        }, (err) => {
            res.status(400).send(err);
        });
    });
};