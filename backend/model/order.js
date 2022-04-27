const mongoose = require ('mongoose');

const orderSchema = new mongoose.Schema({
    orderID: {type: String, required: true},
    username: {type: String, required: true},
    hospitalID: {type: String, required: true},
    date: {type: Date, required: true},
    amount: {type: Number, required: true}
});

const order = mongoose.model('Order', orderSchema);

module.exports = order;