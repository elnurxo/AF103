const mongoose = require('mongoose');
const ArtistSchema = require('../schemas/artist.schema');

const ArtistModel = mongoose.model('Artist', ArtistSchema);

module.exports = ArtistModel;
