const Joi = require('joi');

const ArtistValidation = Joi.object({
    username: Joi.string().min(2).max(30).required(),
    stageName: Joi.string().min(2).max(30).required(),
    birthDate: Joi.string().required(),
    genre: Joi.string().required(),
    profileImage: Joi.string().optional().allow(''),
    backgroundImage: Joi.string().optional().allow(''),
    email: Joi.string().email().required(),
    password: Joi.string().min(5).required(),
    isVerified: Joi.boolean()
});

module.exports = ArtistValidation;
