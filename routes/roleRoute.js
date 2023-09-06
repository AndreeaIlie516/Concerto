module.exports = (app) => {
  const Controller = require("../controllers/roleController.js");
  app.get("/role/getAllRoles", Controller.getAllRoles);
  app.get("/role/getRoleByID/:ID", Controller.getRoleByID);
  app.post("/role/addRole", Controller.addRole);
  app.delete("/role/deleteRole/:ID", Controller.deleteRole);
  app.put("/role/updateRole/:ID", Controller.updateRole);
};
