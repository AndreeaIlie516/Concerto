const Service = require("../services/locationService.js");

module.exports = {
  getAllLocations,
  getLocationByID,
  addLocation,
  deleteLocation,
  updateLocation,
};

async function getAllLocations(req, res) {
  try {
    let concerts = await Service.getAllLocations();
    res.status(200).json(concerts);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function getLocationByID(req, res) {
  try {
    let locationID = req.params.ID;
    let concert = await Service.getLocationByID(locationID);
    res.status(200).json(concert);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function addLocation(req, res) {
  try {
    let locationToAdd = await Service.addLocation(req.body);
    res.status(200).json(locationToAdd);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function deleteLocation(req, res) {
  try {
    let locationID = req.params.ID;
    let location = await Service.deleteLocation(locationID);
    res.status(200).json(location);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function updateLocation(req, res) {
  try {
    let locationID = req.params.ID;
    let location = await Service.updateLocation(locationID, req.body);
    res.status(200).json(location);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
