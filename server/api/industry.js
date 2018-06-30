module.exports = function (oApp) {

    var {Industry} = require('../db/models/industry.js');

    oApp.get('/api/industries', (req, res) => {
        Industry.find().then((industries) => {
            res.send({industries});
        }, (err) => {
            res.status(400).send(err);
        })
    });

    oApp.post('/api/industry', (req, res) => {

        var maxId = 1;
        Industry.find().sort({'_id':-1}).limit(1).exec(function(err, result) {
            if(result.length != 0){
                maxId = result[0]._id + 1;
            }
            
            var industry = new Industry({
                _id: maxId,
                industryName : req.body.industryName
            });
    
            industry.save().then((industry) => {
                res.send(industry);
            }, (err) => {
                res.status(400).send(err);
            });
        });
    });

    oApp.get('/api/industry/:id', (req, res) => {
        Industry.findOne({_id:req.params.id}).then((industry) => {
            res.send({industry});
        }, (err) => {
            res.status(400).send(err);
        });
    });

    oApp.delete('/api/industry/:id', (req, res) => {
        Industry.remove({_id: req.params.id}).then((industry) => {
            res.send('Successfully deleted');
        }, (err) => {
            res.status(400).send(err);
        });
    });

    oApp.put('/api/industry/:id', (req, res) => {
        Industry.update({
            _id: req.params.id,
        }, {
            industryName: req.body.industryName
        }).then((industry) => {
            res.send('updated successfully');
        }, (err) => {
            res.status(400).send(err);
        });
    });
};