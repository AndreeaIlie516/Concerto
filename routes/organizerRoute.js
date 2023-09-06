module.exports = (app) => {
  const Controller = require("../controllers/organizerController.js");
  app.get("/organize/getAllOrganizers", Controller.getAllOrganizers);
  app.get("/organize/getOrganizerByID/:ID", Controller.getOrganizerByID);
  app.post("/organize/addOrganizer", Controller.addOrganizer);
  app.delete("/organize/deleteOrganizer/:ID", Controller.deleteOrganizer);
  app.put("/organize/updateOrganizer/:ID", Controller.updateOrganizer);
};
