const { productsService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');
 
const listAllProducts = async (_req, res) => {
  const { status, data } = await productsService.listAllProducts();
  return res.status(mapStatusHTTP(status)).json(data);
};

const getProductsById = async (req, res) => {
  const id = Number(req.params.id);
  const { status, data } = await productsService.getProductsId(id);
  return res.status(mapStatusHTTP(status)).json(data);
};

const createProduct = async (req, res) => {
  const newProduct = req.body;
  const result = await productsService.createProduct(newProduct);
  return res.status(mapStatusHTTP(result.status)).json(result.data);
};
const updateProduct = async (req, res) => {
  const productId = Number(req.params.id);
  const updatedProductData = req.body;

  const result = await productsService.updateProduct(productId, updatedProductData);
  return res.status(mapStatusHTTP(result.status)).json(result.data);
};

const deleteProduct = async (req, res) => {
  const productId = Number(req.params.id);
  const result = await productsService.deleteProduct(Number(productId));
  return res.status(mapStatusHTTP(result.status)).json(result.data);
};

module.exports = {
  listAllProducts,
  getProductsById,
  createProduct,
  updateProduct,
  deleteProduct,
};
