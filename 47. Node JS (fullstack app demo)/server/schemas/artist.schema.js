const mongoose = require('mongoose');

const ArtistSchema = new mongoose.Schema({
    stageName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email:  {
        type: String,
        required: true
    },
    birthDate: Date,
    genre: {
        type: String,
        enum: ['r&b','hip-hop','pop','rock','metal','indie','techno','country']
    },
    profileImage: {
        type: String,
        required: false
    },
    backgroundImage: {
        type: String,
        required: false
    },
    isVerified: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

module.exports = ArtistSchema;
