module.exports = function (oApp) {

    let Usecase = require('../../db/models/usecase.js');

    oApp.get('/api/usecase', (req, res) => {
        Usecase.find().then((usecase) => {
            res.send({usecase});
        }, (err) => {
            res.status(400).send(err);
        })
    });

    oApp.post('/api/usecase', (req, res) => {
        var usecase = new Usecase({
            id: req.body.id,
            usecase_name: req.body.usecase_name,
            usecase_type: req.body.usecase_type,
            usecase_desc: req.body.usecase_desc
        });
        
        usecase.save().then((usecase) => {
            res.send(usecase);
        }, (err) => {
            res.status(400).send(err);
        });
    });

    oApp.get('/api/usecase/:id', (req, res) => {
        Usecase.findOne({id:req.params.id}).then((usecase) => {
            res.send({usecase});
        }, (err) => {
            res.status(400).send(err);
        });
    });

    oApp.delete('/api/usecase/:id', (req, res) => {
        Usecase.remove({id: req.params.id}).then((usecase) => {
            res.send('Successfully deleted');
        }, (err) => {
            res.status(400).send(err);
        });
    });

    oApp.put('/api/usecase/:id', (req, res) => {
        Usecase.update({
            id: req.params.id,
        }, {
            usecase_name: req.body.usecase_name,
            usecase_name: req.body.usecase_name,
            usecase_type: req.body.usecase_type
        }).then((usecase) => {
            res.send('updated successfully');
        }, (err) => {
            res.status(400).send(err);
        });
    });
};