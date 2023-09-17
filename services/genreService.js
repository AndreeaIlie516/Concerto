const Genre = require("../models/genre.js");

module.exports = {
  getAllGenres,
  getGenreByID,
  addGenre,
  deleteGenre,
  updateGenre,
  genreExists,
};

async function getAllGenres() {
  try {
    let genres = await Genre.find({});
    return genres;
  } catch (error) {
    throw error;
  }
}

async function getGenreByID(ID) {
  try {
    let genre = await Genre.findById({ _id: ID });
    return genre;
  } catch (error) {
    throw error;
  }
}

async function addGenre(params) {
  try {
    let genreToAdd = await Genre.create(params);
    return genreToAdd;
  } catch (error) {
    throw error;
  }
}

async function deleteGenre(ID) {
  try {
    let genreToDelete = await Genre.findByIdAndDelete({ _id: ID });
    return genreToDelete;
  } catch (error) {
    throw error;
  }
}

async function updateGenre(ID, params) {
  try {
    let genreToUpdate = await Genre.findByIdAndUpdate({ _id: ID }, params);
    return genreToUpdate;
  } catch (error) {
    throw error;
  }
}

async function genreExists(ID) {
  let genre = await Genre.exists({ _id: ID });
  if (!genre) {
    return false;
  }
  return true;
}
