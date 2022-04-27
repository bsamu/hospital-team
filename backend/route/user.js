const router = require('express').Router();
const User = require('../model/user');
const Hospital = require('../model/hospital');
const bcrypt = require('bcrypt');

router.get('/', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

router.get('/username/:username', async (req, res) => {
    if (!req.params.username) return res.sendStatus(400);

    const user = await User.find().where({ username: req.params.username });
    res.json(user).status(200);
});

router.get('/hospital/id/:id', async (req, res) => {
    if (!req.params.id) return res.sendStatus(400);

    const currentHospital = await Hospital.find().where({ id: req.params.id });
    console.log(currentHospital)
    res.json(currentHospital).status(200);
});

router.put('/addhospital/:username', async (req, res) => {
    if (!req.params.username || !req.query.hospitalID) return res.sendStatus(400);
    if (!Number(req.query.hospitalID)) return res.sendStatus(400);

    const user = await User.findOne().where({ username: req.params.username });
    if (!user) return res.sendStatus(404);

    if (user.hospitals.find(e => e === Number(req.query.hospitalID))) return res.sendStatus(409);

    user.hospitals.push(Number(req.query.hospitalID));
    user.save().then(() => {
        res.json(user.hospitals);
    });
});

router.post('/signup', async (req, res) => {
    console.log(req.body)
    if (!req.body.name || !req.body.username || !req.body.email || !req.body.password) return res.status(400).json('Missing credentials');

    const existingUsername = await User.find().where({ username: req.body.username })
    if (existingUsername.length) return res.sendStatus(409);

    const existingEmail = await User.find().where({ email: req.body.email })
    if (existingEmail.length) return res.sendStatus(409);

    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))

    const user = new User(req.body);
    user.save().then(() => {
        res.sendStatus(200);
    });
});

router.post('/login', async (req, res) => {
    const autoHead = req.header('authorization')
    if (!autoHead) return res.sendStatus(401)

    const username = autoHead.split(':::')[0]
    const password = autoHead.split(':::')[1]

    const existingUsername = await User.find().where({ username: username })
    console.log(existingUsername[0].password)
    if (!existingUsername) return res.sendStatus(404);

    const existingPassword = existingUsername[0].password
    const isTrue = bcrypt.compareSync(password, existingPassword)
    // const isTrue = (password === existingPassword)
    console.log(isTrue)
    if (!isTrue) return res.sendStatus(401);

    res.sendStatus(200)
});

module.exports = router;