/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mariadb = require('mariadb');
const pool = require('./db')

const db = require('./db');
const itemRouter = require('./routes/item-router');

const app = express();
const apiPort = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// mongoDB connection
app.get('/', (req, res) => res.json({ msg: 'CoffeeShop API'}));

app.use('/api', itemRouter);

app.listen(apiPort, () => {
    console.log(`Coffeeshop - Server running on port ${apiPort}`);
});
