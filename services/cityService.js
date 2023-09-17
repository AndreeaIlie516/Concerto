const City = require("../models/city.js");
const Location = require("../models/location.js");

module.exports = {
  getAllCities,
  getCityByID,
  addCity,
  deleteCity,
  updateCity,
  cityExists,
};

async function getAllCities() {
  try {
    let city = await City.find({});
    return city;
  } catch (error) {
    throw error;
  }
}

async function getCityByID(ID) {
  try {
    let city = await City.findById({ _id: ID });
    return city;
  } catch (error) {
    throw error;
  }
}

async function addCity(params) {
  try {
    let cityToAdd = await City.create(params);
    return cityToAdd;
  } catch (error) {
    throw error;
  }
}

async function deleteCity(ID) {
  try {
    let cityToDelete = await City.findByIdAndDelete({ _id: ID });
    let cityToDeleteFromLocations = await Location.deleteMany({ city: ID });
    return cityToDelete;
  } catch (error) {
    throw error;
  }
}

async function updateCity(ID, params) {
  try {
    let cityToUpdate = await City.findByIdAndUpdate({ _id: ID }, params);
    let cityToUpdateInLocations = await Location.updateMany(
      { city: ID },
      params
    );
    return cityToUpdate;
  } catch (error) {
    throw error;
  }
}

async function cityExists(ID) {
  let city = await City.exists({ _id: ID });
  if (!city) {
    return false;
  }
  return true;
}
