require('dotenv').config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const mongoose = require ('mongoose');

const userRoutes = require('./route/user');
const hospitalRoutes = require('./route/hospital');
const orderRoutes = require('./route/order');
const stockRoutes = require('./route/stock');

const port = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/hospitals', hospitalRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/stock', stockRoutes);


mongoose.connect(process.env.CONNECTION_STRING, () => {
    // mongoose.connection.db.dropDatabase();
    console.log("MongoDB connected using Mongoose.");

app.get('/api/billingo/hospitals/:key', async (req, res) => {
    return res.sendStatus(400)

});

    app.listen(port, () => {
        console.log(`Listening at localhost:${port}...`)
    });
}, e => console.error(e));
