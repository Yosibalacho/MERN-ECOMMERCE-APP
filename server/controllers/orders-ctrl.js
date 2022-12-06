const ordersModel = require("../models/orders-model");

const getOrder = async (req, res) => {
  await ordersModel.find({}).then((result, err) => {
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

const getOrderById = async (req, res) => {
  await ordersModel
    .findById(req.params.id)
    .then((productId) => {
      if (productId) {
        return res.status(200).json({ success: true, productId });
      }
      return res.json({ success: false, message: "order not found" });
    })
    .catch((error) => res.status(400).json({ success: false, error }));
};

const createOrder = async (req, res) => {
  await ordersModel
    .insertMany(req.body.order)
    .then(() =>
      res.status(200).json({ success: true, message: "order added" })
    )
    .catch((error) => res.status(400).json({ success: false, error }));
};

const updateOrder = async (req, res) => {
  await ordersModel
    .findByIdAndUpdate(req.params.id, req.body.order)
    .then((result) => res.status(200).json({ success: true, result }))
    .catch((err) => res.status(400).json({ success: false, message: err }));
};
const deleteOrder = async (req, res) => {
  await ordersModel
    .findByIdAndDelete(req.params.id)
    .then(() => res.status(300).json({ success: true }))
    .catch((err) => res.status(400).json({ success: false, err }));
};

module.exports = {
   getOrder,
   getOrderById,
  createOrder,
  updateOrder,
   deleteOrder,
};
