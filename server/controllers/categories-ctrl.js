const categoriesModel = require("../models/categories-model");

const getCategory = async (req, res) => {
  await categoriesModel.find({}).then((result, err) => {
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

const getCategoryById = async (req, res) => {
  await categoriesModel
    .findById(req.params.id)
    .then((productId) => {
      if (productId) {
        return res.status(200).json({ success: true, productId });
      }
      return res.json({ success: false, message: "category not found" });
    })
    .catch((error) => res.status(400).json({ success: false, error }));
};

const createCategory = async (req, res) => {
  await categoriesModel
    .insertMany(req.body.data)
    .then(() =>
      res.status(200).json({ success: true, message: "category added" })
    )
    .catch((error) => res.status(400).json({ success: false, error }));
};

const updateCategory = async (req, res) => {
  await categoriesModel
    .findByIdAndUpdate(req.params.id, req.body.data)
    .then((result) => res.status(200).json({ success: true, result }))
    .catch((err) => res.status(400).json({ success: false, message: err }));
};
const deleteCategory = async (req, res) => {
  await categoriesModel
    .findByIdAndDelete(req.params.id)
    .then(() => res.status(300).json({ success: true }))
    .catch((err) => res.status(400).json({ success: false, err }));
};

module.exports = {
  getCategory,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
