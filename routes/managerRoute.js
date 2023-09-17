module.exports = (app) => {
    const Controller = require("../controllers/managerController.js");
    app.get("/manager/getAllManagers", Controller.getAllManagers);
    app.get("/manager/getManagerByID/:ID", Controller.getManagerByID);
    app.post("/manager/addManager", Controller.addManager);
    app.delete("/manager/deleteManager/:ID", Controller.deleteManager);
    app.put("/manager/updateManager/:ID", Controller.updateManager);
  };
  