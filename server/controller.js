let songs = [
    {
        id: 1
    },
    {
        id: 2
    },
    {
        id: 3
    }
];

let id = 1;

module.exports = {
    getSongs: function(req, res) {
        res.status(200).json(songs);
    },
    addSong: function(req,res) {
        const {title, artist, album} = req.body;
        let song = {
            title,
            artist,
            album,
            id
        };
        songs.push(song);
        id++;
        res.status(200).json(songs);
    },
    removeSong: function(req, res) {
        const index = songs.findIndex((val) => val.id == req.params.id);
        songs.splice(index, 1);
    }
}