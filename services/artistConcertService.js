const Concert = require('../models/concert.js')
const ArtistConcert = require('../models/artistConcert.js')

const ArtistService = require('../services/artistService.js')
const ConcertService = require('../services/concertService.js')

module.exports = {
    //getArtistConcert,
    getConcertArtistsDetails,
    getArtistConcertsDetails,
    addArtistToConcert,
    addConcertToArtist,
    deleteArtistFromConcert,
    deleteArtistFromItsConcerts,
    deleteConcertFromArtist,
    deleteConcertFromItsArtists,
    updateArtistInConcert,
    updateConcertInArtist
}
/*
async function getArtistConcert() {
    try{
        let artistConcert = await ArtistConcert.find({});
        let artist = await ArtistService.getArtistByID(artistConcert.artist);
        artistConcert.artist = artist;
        return artistConcert;
    }
    catch(error){
        throw error;
    }
}
*/
async function getConcertArtistsDetails(concertID){
    try{
        let concertArtists = await ArtistConcert.find({concert: concertID})
            .populate('concert')
            .populate('artist');
        return concertArtists;
    }
    catch(error){
        throw error;
    }

}

async function getArtistConcertsDetails(artistID){
    try{
        let artistConcerts = await ArtistConcert.find({artist: artistID})
            .populate('artist')
            .populate('concert');
        return artistConcerts;
    }
    catch(error){
        throw error;
    }

}

async function addArtistToConcert(params) {
    try{
        let artistID = params.artist;
        let artist = await ArtistService.artistExists(artistID);

        if(!artist){
            throw new Error(`No artist with id ${artistID} exists in the database`);
        }
        let concertArtistToAdd = await ArtistConcert.create(params);
        return concertArtistToAdd;
    }
    catch(error){
        throw error;
    }
}

async function addConcertToArtist(params) {
    try{
        let concertID = params.concert;
        let concert = await ConcertService.concertExists(concertID);

        if(!concert){
            throw new Error(`No concert with id ${concertID} exists in the database`);
        }
        let artistConcertToAdd = await ArtistConcert.create(params);
        return artistConcertToAdd;
    }
    catch(error){
        throw error;
    }
}


async function deleteArtistFromConcert(concertID, artistID){
    try{
        let artistConcert = await ArtistConcert.findOneAndDelete({concert: concertID, artist: artistID});
        return artistConcert;
    }
    catch(error){
        throw error;
    }
}

async function deleteArtistFromItsConcerts(artistID){
    try{
        let artistConcerts = await ArtistConcert.deleteMany({artist: artistID});
        return artistConcerts;
    }
    catch(error){
        throw error;
    }
}


async function deleteConcertFromArtist(artistID, concertID){
    try{
        let concertArtist = await ArtistConcert.findOneAndDelete({artist: artistID, concert: concertID});
        return concertArtist;
    }
    catch(error){
        throw error;
    }
}

async function deleteConcertFromItsArtists(concertID){
    try{
        let concertArtists = await ArtistConcert.deleteMany({concert: concertID});
        return concertArtists;
    }
    catch(error){
        throw error;
    }
}


async function updateArtistInConcert(concertID, artistID, params){
    try{
        let artistConcert = await ArtistConcert.updateMany({concert: concertID, artist: artistID}, params);

        return artistConcert;
    }
    catch(error){
        throw error;
    }
}

//TODO: modify to find and update all the concerts of an artist
async function updateConcertInArtist(artistID, concertID, params){
    try{
        let concertArtist = await ArtistConcert.updateMany({artist: artistID, concert: concertID}, params);

        return concertArtist;
    }
    catch(error){
        throw error;
    }
}