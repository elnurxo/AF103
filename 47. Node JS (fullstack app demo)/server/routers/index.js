const artist_router = require('./artist.router');
const song_router = require('./song.router');

const router = {
    artist: artist_router,
    song: song_router
}

module.exports = router;