const productsModel = require("../models/products-model");

const getProduct = async (req, res) => {
  await productsModel.find({}).then((result, err) => {
    if (err) {
      return res.status(400).json({ success: false, message: err });
    }
    if (result.length == 0) {
      return res.json({ success: false, message: "no data" });
    }
    if (result) {
      return res.status(200).json({ success: true, message: result });
    }
  });
};

const getProductById = async (req, res) => {
  await productsModel
    .findById(req.params.id)
    .then((productId) => {
      if (productId) {
        return res.status(200).json({ success: true, productId });
      }
      return res.json({ success: false, message: "product not found" });
    })
    .catch((error) => res.status(400).json({ success: false, error }));
};

const createProduct = async (req, res) => {
  await productsModel
    .insertMany(req.body.product)
    .then(() =>
      res.status(200).json({ success: true, message: "product added" })
    )
    .catch((error) => res.status(400).json({ success: false, error }));
};

const updateProduct = async (req, res) => {
  await productsModel
    .findByIdAndUpdate(req.params.id, req.body.product)
    .then((result) => res.status(200).json({ success: true, result }))
    .catch((err) => res.status(400).json({ success: false, message: err }));
};
const deleteProduct = async (req, res) => {
  await productsModel
    .findByIdAndDelete(req.params.id)
    .then(() => res.status(300).json({ success: true }))
    .catch((err) => res.status(400).json({ success: false, err }));
};

module.exports = {
  getProduct,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};