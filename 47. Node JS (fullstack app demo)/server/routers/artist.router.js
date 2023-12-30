const express = require('express');
const artist_router = express.Router();
const ArtistAuthMiddleware = require('../middlewares/artist.middleware');
const artist_controller = require('../controllers/artist.controller');
const verifyToken = require('../middlewares/verifyJwt.middleware');


artist_router.get('/',verifyToken, artist_controller.getAll);

artist_router.get('/:id', verifyToken,artist_controller.getOne);

artist_router.post('/register', ArtistAuthMiddleware,artist_controller.register);

artist_router.get('/verify/:token',artist_controller.verify);

artist_router.post('/login',artist_controller.login);

artist_router.delete('/:id', artist_controller.delete);

artist_router.patch('/:id', artist_controller.edit);

module.exports = artist_router;