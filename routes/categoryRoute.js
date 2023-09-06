module.exports = (app) => {
    const Controller = require("../controllers/categoryController.js");
    app.get("/genre/getAllCategories", Controller.getAllCategories);
    app.get("/genre/getCategoryByID/:ID", Controller.getCategoryByID);
    app.post("/genre/addCategory", Controller.addCategory);
    app.delete("/genre/deleteCategory/:ID", Controller.deleteCategory);
    app.put("/genre/updateCategory/:ID", Controller.updateCategory);
  };
  