const Service = require("../services/cityService.js");

module.exports = {
  getAllCities,
  getCityByID,
  addCity,
  deleteCity,
  updateCity,
};

async function getAllCities(req, res) {
  try {
    let cities = await Service.getAllCities();
    res.status(200).json(cities);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function getCityByID(req, res) {
  try {
    let cityID = req.params.ID;
    let city = await Service.getCityByID(cityID);
    res.status(200).json(city);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function addCity(req, res) {
  try {
    let cityToAdd = await Service.addCity(req.body);
    res.status(200).json(cityToAdd);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function deleteCity(req, res) {
  try {
    let cityID = req.params.ID;
    let city = await Service.deleteCity(cityID);
    res.status(200).json(city);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function updateCity(req, res) {
  try {
    let cityID = req.params.ID;
    let city = await Service.updateCity(cityID, req.body);
    res.status(200).json(city);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
