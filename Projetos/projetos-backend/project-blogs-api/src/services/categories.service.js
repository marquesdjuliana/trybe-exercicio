const { Category } = require('../models');

const createCategory = async (category) => {
  const createdCategory = await Category.create(category);
  return { status: 'CREATED', data: createdCategory.dataValues };
};
const listAllCategories = async () => {
  const categories = await Category.findAll();
  return { status: 'SUCCESSFUL', data: categories };
};
module.exports = {
  createCategory,
  listAllCategories,
};