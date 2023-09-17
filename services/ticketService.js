const Ticket = require("../models/ticket.js");

module.exports = {
  getAllTickets,
  getTicketByID,
  addTicket,
  deleteTicket,
  updateTicket,
  ticketExists,
};

async function getAllTickets() {
  try {
    let ticket = await Ticket.find({});
    return ticket;
  } catch (error) {
    throw error;
  }
}

async function getTicketByID(ID) {
  try {
    let ticket = await Ticket.findById({ _id: ID });
    return ticket;
  } catch (error) {
    throw error;
  }
}

async function addTicket(params) {
  try {
    let ticketToAdd = await Ticket.create(params);
    return ticketToAdd;
  } catch (error) {
    throw error;
  }
}

async function deleteTicket(ID) {
  try {
    let ticketToDelete = await Ticket.findByIdAndDelete({ _id: ID });
    return ticketToDelete;
  } catch (error) {
    throw error;
  }
}

async function updateTicket(ID, params) {
  try {
    let ticketToUpdate = await Ticket.findByIdAndUpdate({ _id: ID }, params);
    return ticketToUpdate;
  } catch (error) {
    throw error;
  }
}

async function ticketExists(ID) {
  let ticket = await Ticket.exists({ _id: ID });
  if (!ticket) {
    return false;
  }
  return true;
}
