const mongoose = require('mongoose');

const ArtistSchema = new mongoose.Schema({
    name: String,
    age: Number,
    genre: String,
    imageURL: String,
    createdAt: Date,
    username: String,
    email: String,
    password: String
});

module.exports = ArtistSchema;
