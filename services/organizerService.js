const Organizer = require("../models/organizer.js");

module.exports = {
  getAllOrganizers,
  getOrganizerByID,
  addOrganizer,
  deleteOrganizer,
  updateOrganizer,
  organizerExists,
};

async function getAllOrganizers() {
  let organizer = await Organizer.find({});
  return organizer;
}

async function getOrganizerByID(ID) {
  let organizer = await Organizer.findById({ _id: ID });
  return organizer;
}

async function addOrganizer(params) {
  let organizerToAdd = await Organizer.create(params);
  return organizerToAdd;
}

async function deleteOrganizer(ID) {
  let organizerToDelete = await Organizer.findByIdAndDelete({ _id: ID });
  return organizerToDelete;
}

async function updateOrganizer(ID, params) {
  let organizerToUpdate = await Organizer.findByIdAndUpdate(
    { _id: ID },
    params
  );
  return organizerToUpdate;
}

async function organizerExists(ID) {
  let organizer = await Organizer.exists({ _id: ID });
  if (!organizer) {
    return false;
  }
  return true;
}
