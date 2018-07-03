module.exports = function (oApp) {

    var {LineOfBusiness} = require('../db/models/lineOfBusiness.js');

    oApp.get('/api/lineOfBusinesses', (req, res) => {
        LineOfBusiness.find().then((lineOfBusinesses) => {
            res.send({lineOfBusinesses});
        }, (err) => {
            res.status(400).send(err);
        })
    });

    oApp.post('/api/lineOfBusiness', (req, res) => {

        var maxId = 1;
        LineOfBusiness.find().sort({'_id':-1}).limit(1).exec(function(err, result) {
            if(result.length != 0){
                maxId = result[0]._id + 1;
            }
            
            var lineOfBusiness = new LineOfBusiness({
                _id: maxId,
                lineOfBusinessDesc : req.body.lineOfBusinessDesc
            });
    
            lineOfBusiness.save().then((lineOfBusiness) => {
                res.send(lineOfBusiness);
            }, (err) => {
                res.status(400).send(err);
            });
        });
    });

    oApp.get('/api/lineOfBusiness/:id', (req, res) => {
        LineOfBusiness.findOne({_id:req.params.id}).then((lineOfBusiness) => {
            res.send({lineOfBusiness});
        }, (err) => {
            res.status(400).send(err);
        });
    });

    oApp.delete('/api/lineOfBusiness/:id', (req, res) => {
        LineOfBusiness.remove({_id: req.params.id}).then((lineOfBusiness) => {
            res.send('Successfully deleted');
        }, (err) => {
            res.status(400).send(err);
        });
    });

    oApp.put('/api/lineOfBusiness/:id', (req, res) => {
        LineOfBusiness.update({
            _id: req.params.id,
        }, {
            lineOfBusinessDesc: req.body.lineOfBusinessDesc
        }).then((lineOfBusiness) => {
            res.send('updated successfully');
        }, (err) => {
            res.status(400).send(err);
        });
    });
};