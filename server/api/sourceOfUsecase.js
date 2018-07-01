module.exports = function (oApp) {

    var {SourceOfUsecase} = require('../db/models/sourceofUsecase.js');

    oApp.get('/api/sourceOfUsecases', (req, res) => {
        SourceOfUsecase.find().then((sourceOfUsecases) => {
            res.send({sourceOfUsecases});
        }, (err) => {
            res.status(400).send(err);
        })
    });

    oApp.post('/api/sourceOfUsecase', (req, res) => {

        var maxId = 1;
        SourceOfUsecase.find().sort({'_id':-1}).limit(1).exec(function(err, result) {
            if(result.length != 0){
                maxId = result[0]._id + 1;
            }
            
            var sourceOfUsecase = new SourceOfUsecase({
                _id: maxId,
                sourceOfUsecaseDesc : req.body.sourceOfUsecaseDesc
            });
    
            sourceOfUsecase.save().then((sourceOfUsecase) => {
                res.send(sourceOfUsecase);
            }, (err) => {
                res.status(400).send(err);
            });
        });
    });

    oApp.get('/api/sourceOfUsecase/:id', (req, res) => {
        SourceOfUsecase.findOne({_id:req.params.id}).then((sourceOfUsecase) => {
            res.send({sourceOfUsecase});
        }, (err) => {
            res.status(400).send(err);
        });
    });

    oApp.delete('/api/sourceOfUsecase/:id', (req, res) => {
        SourceOfUsecase.remove({_id: req.params.id}).then((sourceOfUsecase) => {
            res.send('Successfully deleted');
        }, (err) => {
            res.status(400).send(err);
        });
    });

    oApp.put('/api/sourceOfUsecase/:id', (req, res) => {
        SourceOfUsecase.update({
            _id: req.params.id,
        }, {
            sourceOfUsecaseDesc: req.body.sourceOfUsecaseDesc
        }).then((sourceOfUsecase) => {
            res.send('updated successfully');
        }, (err) => {
            res.status(400).send(err);
        });
    });
};