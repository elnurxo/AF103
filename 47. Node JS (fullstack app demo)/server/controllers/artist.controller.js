const ArtistModel = require("../models/artist.model");
const SongModel = require("../models/song.model");
const bcrypt = require("bcrypt");

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
    await newArtist.save();
    res.send(newArtist);
  },
  //login
  login: async (req, res) => {
    const { email, password } = req.body;

    const artist = await ArtistModel.findOne({ email: email });

    if (!artist) {
      res.send({
        status: 401,
        message: "invalid credentials or unverified account!",
      });
      return;
    }
    const decryptedPass = bcrypt.compare(password, artist.password);
    if (!artist.isVerified || !decryptedPass) {
      res.send({
        status: 401,
        message: "invalid credentials or unverified account!",
      });
      return;
    } else {
      console.log("test success");
      res.send({ status: 200, message: "welcome!" });
    }
  },
  //logout

  //verify email
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
