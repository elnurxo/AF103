const express = require('express');
const song_router = express.Router();
const song_controller = require('../controllers/song.controller');


song_router.get('/', song_controller.getAll);

song_router.get('/:id', song_controller.getOne);

song_router.get('/artist/:id',song_controller.getArtistAllSongs);

song_router.post('/', song_controller.post);

song_router.delete('/:id', song_controller.delete);

module.exports = song_router;