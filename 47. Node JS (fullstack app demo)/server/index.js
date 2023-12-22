const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3031;
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

//SCHEMAS
const ArtistSchema = new mongoose.Schema({
    name: String,
    age: Number,
    genre: String,
    imageURL: String,
    createdAt: Date,
    username: String,
    email: String,
    password: String
});
const SongSchema = new mongoose.Schema({
    name: String,
    age: Number,
    genre: String,
    imageURL: String,
    createdAt: Date,
});
//MODELS
const ArtistModel = mongoose.model('Artist', ArtistSchema)
const SongModel = mongoose.model('Song', SongSchema)


//artists - id, name, age, genre, imageURL
//songs - id, title, cover, artistId, duration, releaseYear

app.get('/api',(req,res)=>{
    res.json('welcome to our API');
});

//ARTISTS
app.get('/api/artists',async(req,res)=>{
    const{name} = req.query;
    const artists = await ArtistModel.find({});
    if (name) {
        const filteredArtists = artists.filter((x)=>x.name.toLowerCase().trim().includes(name.toLowerCase().trim()));
        res.send(filteredArtists);
    }
    else{
        res.send(artists);
    }
});
app.get('/api/artists/:id',async(req,res)=>{
    const{id}=req.params;
    const artist = await ArtistModel.findById(id);
    if (artist) {
        res.status(200).send(artist)
    }
    else{
        res.send({message:'not found'})
    }
});
app.post('/api/artists',async(req,res)=>{
    const newArtist = new ArtistModel(req.body);
    await newArtist.save();
    res.send(newArtist);
})
app.delete('/api/artists/:id',async(req,res)=>{
    const{id}=req.params;
    await ArtistModel.findByIdAndDelete(id);
    const artists = await ArtistModel.find({});
    res.send(artists);
})
app.patch('/api/artists/:id',async(req,res)=>{
    const{id}=req.params;
    await ArtistModel.findByIdAndUpdate(id, req.body);
    const updatedArtist = await ArtistModel.findById(id);
    res.send(updatedArtist);
})
// app.put('/api/artists/:id',async(req,res)=>{
//     const{id}=req.params;
// })

//SONGS
app.get('/api/songs',(req,res)=>{
    const{title}=req.query;
    if (title) {
        const filteredSongs = data.songs.filter((x)=>x.title.toLowerCase().trim().includes(title.toLowerCase().trim()));
        res.send(filteredSongs);
    }
    else{
        res.send(data.songs);
    }
})
app.get('/api/songs/:id',(req,res)=>{
    const{id}=req.params;
    const song = data.songs.find((x)=>x.id==id);
    if (song) {
        res.send({message:'success',data: song});
    }
    else{
        res.send({message:'not found',data:null});
    }
})
app.delete('/api/songs/:id',(req,res)=>{
    const{id}=req.params;
    const filteredSongs = data.songs.filter((x)=>x.id!=id);
    data.songs = [...filteredSongs];
    res.send(data.songs);
})

app.listen(PORT, ()=>{
    console.log(`app listening on PORT:${PORT}`)
});
mongoose.connect(process.env.DB_CONNECTION_KEY.replace('<password>',process.env.DB_PASSWORD))
.then(() => console.log('Connected to Mongo DB!'));
