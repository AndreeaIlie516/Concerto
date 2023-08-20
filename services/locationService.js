const Location = require("../models/location.js");

module.exports = {
  getAllLocations,
  getLocationByID,
  addLocation,
  deleteLocation,
  updateLocation,
  locationExists
};

async function getAllLocations() {
  let location = await Location.find({});
  return location;
}

async function getLocationByID(ID) {
  let location = await Location.findById({ _id: ID });
  return location;
}

async function addLocation(params) {
  let locationToAdd = await Location.create(params);
  return locationToAdd;
}

async function deleteLocation(ID) {
  let locationToDelete = await Location.findByIdAndDelete({ _id: ID });
  return locationToDelete;
}

async function updateLocation(ID, params) {
  let locationToUpdate = await Location.findByIdAndUpdate({ _id: ID }, params);
  return locationToUpdate;
}

async function locationExists(ID) {
  let location = await Location.exists({ _id: ID });
  if (!location) {
    return false;
  }
  return true;
}
