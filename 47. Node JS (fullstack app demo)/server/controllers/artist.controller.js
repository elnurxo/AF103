const ArtistModel = require("../models/artist.model");
const SongModel = require('../models/song.model');

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
  post: async (req, res) => {
    const newArtist = new ArtistModel(req.body);
    await newArtist.save();
    res.send(newArtist);
  },
  delete: async (req, res) => {
    const { id } = req.params;
    await ArtistModel.findByIdAndDelete(id);
    //delete artist all songs
    await SongModel.deleteMany({artistId: id});
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
