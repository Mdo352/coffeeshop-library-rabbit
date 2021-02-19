const mongoose = require('mongoose');

mongoose
    .connect(process.env.MONGO_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/cscl', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message);
    });

const db = mongoose.connection;

module.exports = db;
