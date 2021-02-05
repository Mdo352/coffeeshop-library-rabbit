const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Item = new Schema(
    {
        ISBN: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        year: {
            type: Number,
            required: false
        },
        publisher: {
            type: String,
            required: true
        },
        copies:{
            type: Number,
            required: true
        }
    },
    { timestamps: true },
);

module.exports = mongoose.model('item', Item);
