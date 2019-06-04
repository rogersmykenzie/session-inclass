const express = require('express');
const controller = require('./controller');

const app = express();

app.use(express.json());

//gets all of my songs
app.get('/api/songs', controller.getSongs)
//add a song
//name, artist, album, autoAssignedID
app.post('/api/song', controller.addSong);
//delete a song given an id
app.delete('/api/song/:id')

const PORT = 5055;

app.listen(PORT, () => console.log(`Listening on Server Port ${PORT}`))