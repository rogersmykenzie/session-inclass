const express = require('express');
const controller = require('./controller');
const session = require('express-session');

const app = express();

app.use(express.json());

app.use(session({
    secret: "super secret",
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))








//Using Sessions, create authentication middleware for the addSong endpoint.
//If the username is "admin", allow them to add a song, otherwise send back an error message 










// function auth(req, res, next) {
//     const {username, password} = req.body;
//     if(username === 'admin' && password === 'admin') {
//         next();
//     } else {
//         res.status(403).json({error: "UNAUTHORIZED_USER"});
//     }
// }




app.post('/auth/login', controller.login);
app.get('/api/songs', controller.getSongs)
app.post('/api/song', function(req, res, next) {
    if(req.session.username === 'admin') {
        next();
    } else {
        res.status(403).json({error: 'UNAUTHORIZED_USER'});
    }
}, controller.addSong);
app.delete('/api/song/:id', controller.removeSong);

const PORT = 5055;

app.listen(PORT, () => console.log(`Listening on Server Port ${PORT}`))