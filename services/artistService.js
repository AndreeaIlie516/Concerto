const Artist = require("../models/artist.js");
const ManagerService = require("../services/managerService.js");

module.exports = {
  getAllArtists,
  getArtistByID,
  addArtist,
  deleteArtist,
  updateArtist,
  artistExists,
};

async function getAllArtists() {
  try {
    let artist = await Artist.find({}).populate("manager");
    return artist;
  } catch (error) {
    throw error;
  }
}

async function getArtistByID(ID) {
  try {
    let artist = await Artist.findById({ _id: ID }).populate("manager");
    return artist;
  } catch (error) {
    throw error;
  }
}

async function addArtist(params) {
  try {
    let managerId = params.manager;
    let manager = await ManagerService.managerExists(managerId);

    if (!manager) {
      throw new Error(
        "No manager with id ${managerID} exists in the database."
      );
    }

    let artistToAdd = await Artist.create(params);
    return artistToAdd;
  } catch (error) {
    throw error;
  }
}

async function deleteArtist(ID) {
  try {
    let artistToDelete = await Artist.findByIdAndDelete({ _id: ID });
    return artistToDelete;
  } catch (error) {
    throw error;
  }
}

async function updateArtist(ID, params) {
  try {
    let artistToUpdate = await Artist.findByIdAndUpdate({ _id: ID }, params);
    return artistToUpdate;
  } catch (error) {
    throw error;
  }
}

async function artistExists(ID) {
  let artist = await Artist.exists({ _id: ID });
  if (!artist) {
    return false;
  }
  return true;
}
