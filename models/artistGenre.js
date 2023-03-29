const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artistGenreSchema = mongoose.Schema({
    artist: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: "Artist"
    },

    genre: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: "Genre"
    },

    period: {
        required: true,
        type: String
    }
},
    {
        timestamps: true
    } );

const ArtistGenre = mongoose.model('ArtistGenre', artistGenreSchema);

module.exports = ArtistGenre;