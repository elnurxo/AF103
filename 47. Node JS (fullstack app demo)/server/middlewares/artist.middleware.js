const ArtistModel = require('../models/artist.model');
const ArtistValidation = require('../validations/artist.validation');

const ArtistAuthMiddleware = async(req,res,next)=>{
    const {error} = ArtistValidation.validate(req.body);
    const{username, email} = req.body;

    const duplicateEmail = await ArtistModel.find({email});
    const duplicateUsername = await ArtistModel.find({username});

    if (duplicateEmail.length>0) {
        res.send({message: 'email already exists!'})
        return;
    }
    if (duplicateUsername.length>0) {
        res.send({message: 'username already exists!'})
        return;
    }

    if (!error && duplicateUsername.length==0 && duplicateEmail.length==0) {
        next();
    }
    else{
        const{details} = error;
        const message = details[0].message;
        res.send({message});
    }
}

module.exports = ArtistAuthMiddleware