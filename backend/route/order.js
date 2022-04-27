const router = require('express').Router();
const Order = require('../model/order');
const Stock = require('../model/stock');
const axios = require('axios')

router.get('/', async (req, res) => {
    const orders = await Order.find();
    res.json(orders);
});

router.get('/id/:id', async (req, res) => {
    const orders = await Order.find().where({orderID: req.params.id});
    res.json(orders);
});

router.get('/username/:username', async (req, res) => {
    if (!req.params.username) return res.sendStatus(400);
    
    const orders = req.query.hospitalID ? 
        await Order.find().where({username: req.params.username}).where({hospitalID : req.query.hospitalID}) :
        await Order.find().where({username: req.params.username});

    res.json(orders);
});

router.post('/:key', async (req, res) => {
    if (!req.body.username || !req.body.partner_id || !req.body.items[0].quantity) return res.sendStatus(400);

    const stock = await Stock.findOne();
    stock.stock = stock.stock - Number(req.body.items[0].quantity);
    if (stock.stock < 0) return res.sendStatus(409)
    stock.save()

    axios.post(`https://api.billingo.hu/v3/documents`, req.body, {
        headers: {
            "X-API-KEY": `${req.params.key}`,
        }
    }).then((resp) => {
        const order = new Order({
            orderID: resp.data.id,
            username: req.body.username,
            hospitalID: resp.data.partner.id,
            date: resp.data.invoice_date,
            amount: Number(req.body.items[0].quantity)
        });

        order.save().then(() => {
            res.sendStatus(200);
        });
    });
});


module.exports = router;