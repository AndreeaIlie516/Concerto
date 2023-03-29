const Concert = require('../models/concert.js')
const Service = require('../services/artistConcertService.js')
const Artist = require('../models/artist.js')
const  ArtistServcie = require('../services/artistService.js')
const concertService = require('../services/concertService.js')

module.exports = {
    //getArtistConcert,
    getConcertArtistsDetails,
    getArtistConcertsDetails,
    addArtistToConcert,
    addConcertToArtist,
    deleteArtistFromConcert,
    deleteConcertFromArtist,
    updateArtistInConcert,
    updateConcertInArtist,
    generateReport
}

/*
async function getArtistConcert(req, res) {
    try{
        let artistConcert = await Service.getArtistConcert();
        res.status(200).json(artistConcert)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
}
*/
async function getConcertArtistsDetails(req, res) {
    try{
        let concertID = req.params.ID;
        let artistConcert = await Service.getConcertArtistsDetails(concertID);
        res.status(200).json(artistConcert)
    } catch(error) {
        res.status(400).json({message: error.message})
    }
}

async function getArtistConcertsDetails(req, res) {
    try{
        let artistID = req.params.ID;
        let concertArtist = await Service.getArtistConcertsDetails(artistID);
        res.status(200).json(concertArtist)
    } catch(error) {
        res.status(400).json({message: error.message})
    }
}


async function addArtistToConcert(req, res) {
    try{
        let artistConcertToAdd = await Service.addArtistToConcert(req.body);
        res.status(200).json(artistConcertToAdd)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
}

async function addConcertToArtist(req, res) {
    try{
        let concertArtistToAdd = await Service.addConcertToArtist(req.body);
        res.status(200).json(concertArtistToAdd)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
}


async function deleteArtistFromConcert (req, res)  {
    try{
        let concertID = req.params.concertID;
        let artistID = req.params.artistID;
        let concert = await Service.deleteArtistFromConcert(concertID, artistID);
        res.status(200).json(concert)
    } catch(error) {
        res.status(400).json({message: error.message})
    }
}

async function deleteConcertFromArtist (req, res)  {
    try{
        let artistID = req.params.artistID;
        let concertID = req.params.concertID;
        let artist = await Service.deleteConcertFromArtist(artistID, concertID);
        res.status(200).json(artist)
    } catch(error) {
        res.status(400).json({message: error.message})
    }
}


async function updateArtistInConcert(req, res) {
    try{
        let concertID = req.params.concertID;
        let artistID = req.params.artistID;
        let concert = await Service.updateArtistInConcert(concertID, artistID, req.body);
        res.status(200).json(concert)
    } catch(error) {
        res.status(400).json({message: error.message})
    }
}

async function updateConcertInArtist(req, res) {
    try{
        let artistID = req.params.artistID;
        let concertID = req.params.concertID;
        let artist = await Service.updateConcertInArtist(artistID, concertID, req.body);
        res.status(200).json(artist)
    } catch(error) {
        res.status(400).json({message: error.message})
    }
}

async function generateReport() {
    const pipeline = [
        {
            $lookup: {
                from: 'ArtistConcerts',
                localField: '_id',
                foreignField: 'ArtistId',
                as: 'Concerts'
            }
        },
        {
            $unwind: '$Concerts'
        },
        {
            $lookup: {
                from: 'Concerts',
                localField: 'Concerts.ConcertId',
                foreignField: '_id',
                as: 'Concert'
            }
        },
        {
            $unwind: '$Concert'
        },
        {
            $group: {
                _id: '$name',
                avgTicketPrice: { $avg: '$Concert.ticketPrice' }
            }
        },
        {
            $sort: {
                avgTicketPrice: -1
            }
        }
    ];

    const report = await Artist.aggregate(pipeline);
    return report;
}

class ArtistTicketPriceReport {
    constructor(artistName, avgTicketPrice) {
        this.artistName = artistName;
        this.avgTicketPrice = avgTicketPrice;
    }
}

async function callReport(req, res) {
    generateReport().then(report => {
        const dtoReport = report.map(r => new ArtistTicketPriceReport(r._id, r.avgTicketPrice));
        console.log(dtoReport);
    });
}