const Category = require("../models/category.js");

module.exports = {
  getAllCategories,
  getCategoryByID,
  addCategory,
  deleteCategory,
  updateCategory,
  categoryExists,
};

async function getAllCategories() {
  let categories = await Category.find({});
  return categories;
}

async function getCategoryByID(ID) {
  let category = await Category.findById({ _id: ID });
  return category;
}

async function addCategory(params) {
  let categoryToAdd = await Category.create(params);
  return categoryToAdd;
}

async function deleteCategory(ID) {
  let categoryToDelete = await Category.findByIdAndDelete({ _id: ID });
  return categoryToDelete;
}

async function updateCategory(ID, params) {
  let categoryToUpdate = await Category.findByIdAndUpdate({ _id: ID }, params);
  return categoryToUpdate;
}

async function categoryExists(ID) {
  let category = await Category.exists({ _id: ID });
  if (!category) {
    return false;
  }
  return true;
}