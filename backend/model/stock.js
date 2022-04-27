const mongoose = require ('mongoose');

const stockSchema = new mongoose.Schema({
    stock: {type: Number, required: true}
});

const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;