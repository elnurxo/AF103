const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 3031;
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());
require('./config/db');
const router = require('./routers');

app.use('/api/artists', router.artist);
app.use('/api/songs', router.song);

app.listen(PORT, ()=>{
    console.log(`app listening on PORT:${PORT}`)
});

