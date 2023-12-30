const ArtistModel = require("../models/artist.model");
const SongModel = require("../models/song.model");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken');
const sendVerifyEmail = require("../helpers/sendEmail");
require('dotenv').config();



const artist_controller = {
  getAll: async (req, res) => {
    const { name } = req.query;
    const artists = await ArtistModel.find({});
    if (name) {
      const filteredArtists = artists.filter((x) =>
        x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
      );
      res.send(filteredArtists);
    } else {
      res.send(artists);
    }
  },
  getOne: async (req, res) => {
    const { id } = req.params;
    const artist = await ArtistModel.findById(id);
    const{auth} = req;
    console.log('data from middleware: ', auth);
    if (artist) {
      res.status(200).send(artist);
    } else {
      res.send({ message: "not found" });
    }
  },
  //register - bcrypt
  register: async (req, res) => {
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;
    const newArtist = new ArtistModel(req.body);

    const token = jwt.sign({ email: req.body.email }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    res.cookie("token", token, { httpOnly: true, secure: true });

    //call function - send email
    sendVerifyEmail(req.body.email, token);

    await newArtist.save();
    res.send({artist: newArtist, message: 'signed up successfully!'});
  },

  //verify email
  verify: async (req,res)=>{
    const{token} = req.params;

    jwt.verify(token, process.env.SECRET_KEY, async(err, decoded) => {
      if (err) {
          return res.send({
            message: 'invalid token'
          });
      }
      else{
        const foundArtist = await ArtistModel.findOne({email: decoded.email});
        if (!foundArtist) {
          res.send({
            message: 'artist not found with this email!'
          })
        }
        else{
          await ArtistModel.findByIdAndUpdate(foundArtist._id, {isVerified: true});
          res.redirect('http://localhost:5173/login');
        }
      }
  });
  },

  //login
  login: async (req, res) => {
    const { email, password } = req.body;

    //token generate
    const token = jwt.sign({email, password}, process.env.SECRET_KEY, {expiresIn: '7d'});
    
    const artist = await ArtistModel.findOne({ email: email });
    if (!artist) {
      res.send({
        status: 401,
        message: "invalid credentials or unverified account!",
      });
      return;
    }
    const decryptedPass = await bcrypt.compare(password, artist.password);
    if (!artist.isVerified || !decryptedPass || artist.email !== email) {
      res.send({
        status: 401,
        message: "invalid credentials or unverified account!",
      });
      return;
    } else {
      console.log('test')
      res.send({ status: 200, message: "welcome!", token: token });
    }
  },
  //logout

  delete: async (req, res) => {
    const { id } = req.params;
    await ArtistModel.findByIdAndDelete(id);
    //delete artist all songs
    await SongModel.deleteMany({ artistId: id });
    const artists = await ArtistModel.find({});
    res.send(artists);
  },

  edit: async (req, res) => {
    const { id } = req.params;
    await ArtistModel.findByIdAndUpdate(id, req.body);
    const updatedArtist = await ArtistModel.findById(id);
    res.send(updatedArtist);
  },
};

module.exports = artist_controller;
