module.exports = (app) => {
  const Controller = require("../controllers/eventTypeController.js");
  app.get("/eventType/getAllEventTypes", Controller.getAllEventTypes);
  app.get("/eventType/getEventTypeByID/:ID", Controller.getEventTypeByID);
  app.post("/eventType/addEventType", Controller.addEventType);
  app.delete("/eventType/deleteEventType/:ID", Controller.deleteEventType);
  app.put("/eventType/updateEventType/:ID", Controller.updateEventType);
};
