module.exports = (app) => {
    const Controller = require("../controllers/categoryController.js");
    app.get("/category/getAllCategories", Controller.getAllCategories);
    app.get("/category/getCategoryByID/:ID", Controller.getCategoryByID);
    app.post("/category/addCategory", Controller.addCategory);
    app.delete("/category/deleteCategory/:ID", Controller.deleteCategory);
    app.put("/category/updateCategory/:ID", Controller.updateCategory);
  };
  