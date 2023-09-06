const EventType = require("../models/eventType.js");

module.exports = {
  getAllEventTypes,
  getEventTypeByID,
  addEventType,
  deleteEventType,
  updateEventType,
  eventTypeExists,
};

async function getAllEventTypes() {
  let eventType = await EventType.find({});
  return eventType;
}

async function getEventTypeByID(ID) {
  let eventType = await EventType.findById({ _id: ID });
  return eventType;
}

async function addEventType(params) {
  let eventTypeToAdd = await EventType.create(params);
  return eventTypeToAdd;
}

async function deleteEventType(ID) {
  let eventTypeToDelete = await EventType.findByIdAndDelete({ _id: ID });
  return eventTypeToDelete;
}

async function updateEventType(ID, params) {
  let eventTypeToUpdate = await EventType.findByIdAndUpdate(
    { _id: ID },
    params
  );
  return eventTypeToUpdate;
}

async function eventTypeExists(ID) {
  let eventType = await EventType.exists({ _id: ID });
  if (!eventType) {
    return false;
  }
  return true;
}
