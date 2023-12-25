const mongoose = require('mongoose');
const SongSchema = require('../schemas/song.schema');

const SongModel = mongoose.model('Song', SongSchema)

module.exports = SongModel;