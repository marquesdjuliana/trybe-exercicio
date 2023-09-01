const { categoriesService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const createCategory = async (req, res) => {
  const newCategory = req.body;
  const { status, data } = await categoriesService.createCategory(newCategory);
  return res.status(mapStatusHTTP(status)).json(data);
};
const listAllCategories = async (req, res) => {
  const { status, data } = await categoriesService.listAllCategories();
  return res.status(mapStatusHTTP(status)).json(data);
};
module.exports = {
  createCategory,
  listAllCategories,
};