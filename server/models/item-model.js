const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Item = new Schema(
    {
        isbn: {
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
        publication_year: {
            type: String,
            required: true
        },
        publisher: {
            type: String,
            required: true
        },
        image_url_small: {
            type: String,
            required: false
        },
        image_url_med: {
            type: String,
            required: false
        },
        image_url_large: {
            type: String,
            required: true
        },
        copies: {
            type: Number,
            required: true
        },
        available: {
            type: Number,
            required: true
        },
    },
    { timestamps: true },
);

module.exports = mongoose.model('books', Item);
