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
  let ticket = await Ticket.find({});
  return ticket;
}

async function getTicketByID(ID) {
  let ticket = await Ticket.findById({ _id: ID });
  return ticket;
}

async function addTicket(params) {
  let ticketToAdd = await Ticket.create(params);
  return ticketToAdd;
}

async function deleteTicket(ID) {
  let ticketToDelete = await Ticket.findByIdAndDelete({ _id: ID });
  return ticketToDelete;
}

async function updateTicket(ID, params) {
  let ticketToUpdate = await Ticket.findByIdAndUpdate({ _id: ID }, params);
  return ticketToUpdate;
}

async function ticketExists(ID) {
  let ticket = await Ticket.exists({ _id: ID });
  if (!ticket) {
    return false;
  }
  return true;
}
