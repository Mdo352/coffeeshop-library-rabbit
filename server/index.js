/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./db');
const itemRouter = require('./routes/item-router');

const app = express();
const apiPort = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api', itemRouter);

if (process.env.NODE_ENV === 'production' ) {
    app.use(express.static('/client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')) // relative path
    })
}

app.listen(apiPort, () => {
    console.log(`[Hack.Diversity React Template] - Server running on port ${apiPort}`);
});
