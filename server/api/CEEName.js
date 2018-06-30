module.exports = function (oApp) {

    var {CEEName} = require('../db/models/CEEName.js');

    oApp.get('/api/ceenames', (req, res) => {
        CEEName.find().then((ceenames) => {
            res.send({ceenames});
        }, (err) => {
            res.status(400).send(err);
        })
    });

    oApp.post('/api/ceename', (req, res) => {

        var maxId = 1;
        CEEName.find().sort({'_id':-1}).limit(1).exec(function(err, result) {
            if(result.length!=0){
                console.log("Incrementing id by 1");
                maxId = result[0]._id + 1;
            }
            
            var ceename = new CEEName({
                _id: maxId,
                ceeName : req.body.ceeName
            });
    
            ceename.save().then((ceeName) => {
                res.send(ceeName);
            }, (err) => {
                res.status(400).send(err);
            });
        });
    });

    oApp.get('/api/ceename/:id', (req, res) => {
        CEEName.findOne({_id:req.params.id}).then((ceename) => {
            res.send({ceename});
        }, (err) => {
            res.status(400).send(err);
        });
    });

    oApp.delete('/api/ceename/:id', (req, res) => {
        CEEName.remove({_id: req.params.id}).then((ceename) => {
            res.send('Successfully deleted');
        }, (err) => {
            res.status(400).send(err);
        });
    });

    oApp.put('/api/ceename/:id', (req, res) => {
        CEEName.update({
            _id: req.params.id,
        }, {
            ceeName: req.body.ceeName
        }).then((ceename) => {
            res.send('updated successfully');
        }, (err) => {
            res.status(400).send(err);
        });
    });
};