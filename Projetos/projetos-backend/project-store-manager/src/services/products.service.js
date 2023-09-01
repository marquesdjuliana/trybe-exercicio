const { productsModel } = require('../models');
const validate = require('../validations/validationsInputValues');

const listAllProducts = async () => {
    const products = await productsModel.findAll();
    return { status: 'SUCCESSFUL', data: products };
};

const getProductsId = async (productId) => {
  const product = await productsModel.findById(productId);
  if (!product) {
    return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  }
  return { status: 'SUCCESSFUL', data: product };
};

const createProduct = async (productName) => {
  const error = validate.validateProduct(productName);
  if (error) return { status: error.status, data: { message: error.message } };
  const insertId = await productsModel.createProduct(productName);
  const insertedProduct = await productsModel.findById(insertId);
  if (insertedProduct) return { status: 'CREATED', data: insertedProduct };
};
const updateProduct = async (productId, updatedProductData) => {
  const error = validate.validateProduct(updatedProductData);
  if (error) return { status: error.status, data: { message: error.message } };

  const existingProduct = await productsModel.findById(productId);
  if (!existingProduct) {
    return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  }

  await productsModel.updateProduct(productId, updatedProductData);

  const updatedProduct = await productsModel.findById(productId);
  return { status: 'SUCCESSFUL', data: updatedProduct };
};

const deleteProduct = async (productId) => {
  const result = await productsModel.findById(productId);
  if (!result || result.status === 'NOT_FOUND') {
    return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  }
  await productsModel.deleteProduct(productId);
  return { status: 'NO_CONTENT' };
};

module.exports = {
  listAllProducts,
  getProductsId,
  createProduct,
  updateProduct,
  deleteProduct,
};