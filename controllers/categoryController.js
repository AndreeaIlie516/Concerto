const Service = require("../services/categoryService.js");

module.exports = {
  getAllCategories,
  getCategoryByID,
  addCategory,
  deleteCategory,
  updateCategory,
};

async function getAllCategory(req, res) {
  try {
    let category = await Service.getAllCategories();
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function getCategoryByID(req, res) {
  try {
    let categoryID = req.params.ID;
    let category = await Service.getCategoryByID(categoryID);
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function addCategory(req, res) {
  try {
    let categoryToAdd = await Service.addCategory(req.body);
    res.status(200).json(categoryToAdd);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function deleteCategory(req, res) {
  try {
    let categoryID = req.params.ID;
    let category = await Service.deleteCategory(categoryID);
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function updateCategory(req, res) {
  try {
    let categoryID = req.params.ID;
    let category = await Service.updateCategory(categoryID, req.body);
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
