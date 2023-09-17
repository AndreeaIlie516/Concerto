const Artist = require("../models/artist.js");
const Service = require("../services/artistService.js");

module.exports = {
  getAllArtists,
  getArtistByID,
  addArtist,
  deleteArtist,
  updateArtist,
};

async function getAllArtists(req, res) {
  try {
    let artists = await Service.getAllArtists();
    res.status(200).json(artists);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function getArtistByID(req, res) {
  try {
    let { ID } = req.params;
    let artist = await Service.getArtistByID(ID);
    res.status(200).json(artist);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function addArtist(req, res) {
  try {
    let artistToAdd = await Service.addArtist(req.body);
    res.status(200).json(artistToAdd);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function deleteArtist(req, res) {
  try {
    let artistID = req.params.ID;
    let artist = await Service.deleteArtist(artistID);
    res.status(200).json(artist);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function updateArtist(req, res) {
  try {
    let { ID } = req.params;
    let artist = await Service.updateArtist(ID, req.body);
    res.status(200).json(artist);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
