const router = require('express').Router();
const Stock = require('../model/stock');

router.get('/', async (req, res) => {
    return res.sendStatus(418)
    /* const stock = await Stock.find();
    res.json(stock); */
});

router.put('/:amount', async (req, res) => {
    const stock = await Stock.findOne();
    stock.stock = Number(req.params.amount);
    stock.save().then(() => {
        res.json(stock);
    });
});

module.exports = router;