const Location = require("../models/location.js");
const CityService = require("../services/cityService.js");

module.exports = {
  getAllLocations,
  getLocationByID,
  addLocation,
  deleteLocation,
  updateLocation,
  locationExists,
};

async function getAllLocations() {
  try {
    let location = await Location.find({}).populate("city");
    return location;
  } catch (error) {
    throw error;
  }
}

async function getLocationByID(ID) {
  try {
    let location = await Location.findById({ _id: ID }).populate("city");
    return location;
  } catch (error) {
    throw error;
  }
}

async function addLocation(params) {
  try {
    let cityId = params.city;
    let city = await CityService.getCityByID(cityId);

    if (!city) {
      throw new Error("No city with id ${cityID} exists in the database.");
    }

    let locationToAdd = await Location.create(params);
    return locationToAdd;
  } catch (error) {
    throw error;
  }
}

async function deleteLocation(ID) {
  try {
    let locationToDelete = await Location.findByIdAndDelete({ _id: ID });
    return locationToDelete;
  } catch (error) {
    throw error;
  }
}

async function updateLocation(ID, params) {
  try {
    let locationToUpdate = await Location.findByIdAndUpdate(
      { _id: ID },
      params
    );
    return locationToUpdate;
  } catch (error) {
    throw error;
  }
}

async function locationExists(ID) {
  let location = await Location.exists({ _id: ID });
  if (!location) {
    return false;
  }
  return true;
}
