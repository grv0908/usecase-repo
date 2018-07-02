module.exports = function (oApp) {

    var {Link} = require('../db/models/link.js');

    oApp.get('/api/links', (req, res) => {
        Link.find().then((links) => {
            res.send({links});
        }, (err) => {
            res.status(400).send(err);
        })
    });

    oApp.post('/api/link', (req, res) => {

        var maxId = 1;
        Link.find().sort({'_id':-1}).limit(1).exec(function(err, result) {
            if(result.length != 0){
                maxId = result[0]._id + 1;
            }
            
            var link = new Link({
                _id: maxId,
                linkName : req.body.linkName,
                linkUrl : req.body.linkUrl
            });
    
            link.save().then((link) => {
                res.send(link);
            }, (err) => {
                res.status(400).send(err);
            });
        });
    });

    oApp.get('/api/link/:id', (req, res) => {
        Link.findOne({_id:req.params.id}).then((link) => {
            res.send({link});
        }, (err) => {
            res.status(400).send(err);
        });
    });

    oApp.delete('/api/link/:id', (req, res) => {
        Link.remove({_id: req.params.id}).then((link) => {
            res.send('Successfully deleted');
        }, (err) => {
            res.status(400).send(err);
        });
    });

    oApp.put('/api/link/:id', (req, res) => {
        Link.update({
            _id: req.params.id,
        }, {
            linkName: req.body.linkName,
            linkUrl: req.body.linkUrl
        }).then((link) => {
            res.send('updated successfully');
        }, (err) => {
            res.status(400).send(err);
        });
    });
};