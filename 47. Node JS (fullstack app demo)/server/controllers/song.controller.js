const SongModel = require("../models/song.model");

const song_controller = {
  getAll: async (req, res) => {
    const songs = await SongModel.find({});
    res.send(songs);
  },
  getArtistAllSongs: async (req, res) => {
    const { id } = req.params;
    const artist_songs = await SongModel.find({artistId: id});
    res.send(artist_songs);
  },
  getOne: async (req, res) => {
    const { id } = req.params;
    const song = await SongModel.findById(id);
    res.send(song);
  },
  post: async (req, res) => {
    const newSong = new SongModel(req.body);
    await newSong.save();
    res.send(newSong);
  },
  delete: async (req, res) => {
    const { id } = req.params;
    await SongModel.findByIdAndDelete(id);
    const songs = await SongModel.find({});
    res.send(songs);
  }
};

module.exports = song_controller;
