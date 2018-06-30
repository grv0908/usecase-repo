module.exports = function (oApp) {

    var {Region} = require('../db/models/region.js');

    oApp.get('/api/regions', (req, res) => {
        Region.find().then((regions) => {
            res.send({regions});
        }, (err) => {
            res.status(400).send(err);
        })
    });

    oApp.post('/api/region', (req, res) => {

        var maxId = 1;
        Region.find().sort({'_id':-1}).limit(1).exec(function(err, result) {
            if(result.length != 0){
                maxId = result[0]._id + 1;
            }
            
            var region = new Region({
                _id: maxId,
                regionName : req.body.regionName
            });
    
            region.save().then((region) => {
                res.send(region);
            }, (err) => {
                res.status(400).send(err);
            });
        });
    });

    oApp.get('/api/region/:id', (req, res) => {
        Region.findOne({_id:req.params.id}).then((region) => {
            res.send({region});
        }, (err) => {
            res.status(400).send(err);
        });
    });

    oApp.delete('/api/region/:id', (req, res) => {
        Region.remove({_id: req.params.id}).then((region) => {
            res.send('Successfully deleted');
        }, (err) => {
            res.status(400).send(err);
        });
    });

    oApp.put('/api/region/:id', (req, res) => {
        Region.update({
            _id: req.params.id,
        }, {
            regionName: req.body.regionName
        }).then((region) => {
            res.send('updated successfully');
        }, (err) => {
            res.status(400).send(err);
        });
    });
};