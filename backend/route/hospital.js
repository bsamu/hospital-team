const router = require('express').Router();
const Hospital = require('../model/hospital');
const axios = require('axios');

router.get('/', async (req, res) => {
    const hospitals = await Hospital.find();
    res.json(hospitals);
});

router.get('/id/:id', async (req, res) => {
    const hospitals = await Hospital.find().where({ id: req.params.id });
    res.json(hospitals);
});

router.post('/:key', async (req, res) => {
    return res.sendStatus(400)
    // const existingHospital = await Hospital.find().where({ name: req.body.name })
    // if (existingHospital.length) return res.sendStatus(409);

    /* axios.post('https://api.billingo.hu/v3/partners', req.body, {
        headers: {
            "X-API-KEY": `${req.params.key}`,
        }
    }).then((resp) => {
        const hospital = new Hospital({
            id: resp.data.id,
            name: resp.data.name,
            address: resp.data.address.address,
            city: resp.data.address.city,
            country: resp.data.address.country_code,
            postcode: resp.data.address.post_code,
            taxID: resp.data.taxcode,
            orders: []
        });
        hospital.save().then(() => {
            res.json(resp.data);
        });
    }).catch(err => console.log(err)); */
});

router.put('/addorder/:hospitalID', async (req, res) => {
    if (!req.params.hospitalID || !req.query.orderID) return res.sendStatus(400);
    if (!Number(req.query.orderID)) return res.sendStatus(400);

    const hospital = await Hospital.findOne().where({ id: req.params.hospitalID });
    if (!hospital) return res.sendStatus(404);

    // if (hospital.orders.find(id => id === Number(req.query.orderID))) return res.sendStatus(409);

    hospital.orders.push(Number(req.query.orderID));
    hospital.save().then(() => {
        res.json(hospital.orders);
    });
});



module.exports = router;