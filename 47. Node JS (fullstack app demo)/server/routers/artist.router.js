const express = require('express');
const artist_router = express.Router();
const ArtistAuthMiddleware = require('../middlewares/artist.middleware');
const artist_controller = require('../controllers/artist.controller');


artist_router.get('/', artist_controller.getAll);

artist_router.get('/:id', artist_controller.getOne);

artist_router.post('/', ArtistAuthMiddleware,artist_controller.post);

artist_router.delete('/:id', artist_controller.delete);

artist_router.patch('/:id', artist_controller.edit);

module.exports = artist_router;