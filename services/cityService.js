const City = require("../models/city.js");

module.exports = {
  getAllCities,
  getCityByID,
  addCity,
  deleteCity,
  updateCity,
  cityExists,
};

async function getAllCities() {
  let city = await City.find({});
  return city;
}

async function getCityByID(ID) {
  let city = await City.findById({ _id: ID });
  return city;
}

async function addCity(params) {
  let cityToAdd = await City.create(params);
  return cityToAdd;
}

async function deleteCity(ID) {
  let cityToDelete = await City.findByIdAndDelete({ _id: ID });
  return cityToDelete;
}

async function updateCity(ID, params) {
  let cityToUpdate = await City.findByIdAndUpdate({ _id: ID }, params);
  return cityToUpdate;
}

async function cityExists(ID) {
  let city = await City.exists({ _id: ID });
  if (!city) {
    return false;
  }
  return true;
}
