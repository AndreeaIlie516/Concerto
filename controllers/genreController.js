const Service = require("../services/genreService.js");

module.exports = {
  getAllGenres,
  getGenreByID,
  addGenre,
  deleteGenre,
  updateGenre
};

async function getAllGenres(req, res) {
  try {
    let genres = await Service.getAllGenres();
    res.status(200).json(genres);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function getGenreByID(req, res) {
  try {
    let genreID = req.params.ID;
    let genre = await Service.getGenreByID(genreID);
    res.status(200).json(genre);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function addGenre(req, res) {
  try {
    let genreToAdd = await Service.addGenre(req.body);
    res.status(200).json(genreToAdd);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function deleteGenre(req, res) {
  try {
    let genreID = req.params.ID;
    let genre = await Service.deleteGenre(genreID);
    res.status(200).json(genre);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function updateGenre(req, res) {
  try {
    let genreID = req.params.ID;
    let genre = await Service.updateGenre(genreID, req.body);
    res.status(200).json(genre);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
