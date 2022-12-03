const storesModel = require("../models/stores-model");

const getStore = async (req, res) => {
  await storesModel.find({}).then((result, err) => {
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

const getStoreById = async (req, res) => {
  await storesModel
    .findById(req.params.id)
    .then((productId) => {
      if (productId) {
        return res.status(200).json({ success: true, productId });
      }
      return res.json({ success: false, message: "store not found" });
    })
    .catch((error) => res.status(400).json({ success: false, error }));
};

const createStore = async (req, res) => {
  await storesModel
    .insertMany(req.body.data)
    .then(() => res.status(200).json({ success: true, message: "store added" }))
    .catch((error) => res.status(400).json({ success: false, error }));
};

const updateStore = async (req, res) => {
  await storesModel
    .findByIdAndUpdate(req.params.id, req.body.data)
    .then((result) => res.status(200).json({ success: true, result }))
    .catch((err) => res.status(400).json({ success: false, message: err }));
};
const deleteStore = async (req, res) => {
  await storesModel
    .findByIdAndDelete(req.params.id)
    .then(() => res.status(300).json({ success: true }))
    .catch((err) => res.status(400).json({ success: false, err }));
};

module.exports = {
  getStore,
  getStoreById,
  createStore,
  updateStore,
  deleteStore,
};
