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
  let genres = await Genre.find({});
  return genres;
}

async function getGenreByID(ID) {
  let genre = await Genre.findById({ _id: ID });
  return genre;
}

async function addGenre(params) {
  let genreToAdd = await Genre.create(params);
  return genreToAdd;
}

async function deleteGenre(ID) {
  let genreToDelete = await Genre.findByIdAndDelete({ _id: ID });
  return genreToDelete;
}

async function updateGenre(ID, params) {
  let genreToUpdate = await Genre.findByIdAndUpdate({ _id: ID }, params);
  return genreToUpdate;
}

async function genreExists(ID) {
  let genre = await Genre.exists({ _id: ID });
  if (!genre) {
    return false;
  }
  return true;
}
