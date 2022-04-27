const mongoose = require ('mongoose');

const hospitalSchema = new mongoose.Schema({
    id: {type: Number, required: true},
    name: {type: String, required: true},
    address: {type: String, required: true},
    city: {type: String, required: true},
    country: {type: String, required: true},
    postcode: {type: String, required: true},
    taxID: {type: String, required: true},
    orders: {type: Array, required: true}
});

const hospital = mongoose.model('Hospital', hospitalSchema);

module.exports = hospital;