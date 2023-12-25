const mongoose = require('mongoose');

const SongSchema = new mongoose.Schema({
    name: String,
    genre: String,
    cover: String,
    artistId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Artist"
    },
    createdAt: Date,
});

module.exports = SongSchema;