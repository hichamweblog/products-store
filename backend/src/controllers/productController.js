import Product from '../models/product.model.js';
import { sendSuccess, sendError } from '../utils/responseHandler.js';

export const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find({});
    sendSuccess(res, 'Products retrieved successfully', products);
  } catch (error) {
    next(error);
  }
};

export const getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return sendError(res, 404, 'Product not found');
    }

    sendSuccess(res, 'Product retrieved successfully', product);
  } catch (error) {
    next(error);
  }
};

export const createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    sendSuccess(res, 'Product created successfully', product);
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!product) {
      return sendError(res, 404, 'Product not found');
    }

    sendSuccess(res, 'Product updated successfully', product);
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return sendError(res, 404, 'Product not found');
    }

    sendSuccess(res, 'Product deleted successfully');
  } catch (error) {
    next(error);
  }
};
