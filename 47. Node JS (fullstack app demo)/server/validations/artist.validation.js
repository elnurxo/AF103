const Joi = require('joi');

const ArtistValidation = Joi.object({
    name: Joi.string().min(2).max(30).required(),
    age: Joi.number().min(17).integer().required(),
    genre: Joi.string().required(),
    imageURL: Joi.string().required(),
    createdAt: Joi.date().required(),
    username: Joi.string().min(3).alphanum().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(5).required()
});

module.exports = ArtistValidation;
