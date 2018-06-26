let mongoose = require('mongoose');

let usecaseSchema = mongoose.Schema({
    id: Number,
    usecase_name: String,
    usecase_type: String,
    usecase_desc: String
});

let Usecase = mongoose.model('Usecase', usecaseSchema);

module.exports = Usecase;