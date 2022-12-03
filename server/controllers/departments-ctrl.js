const departmentsModel = require("../models/departments-model");

const getDepartment = async (req, res) => {
  await departmentsModel.find({}).then((result, err) => {
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

const getDepartmentById = async (req, res) => {
  await departmentsModel
    .findById(req.params.id)
    .then((productId) => {
      if (productId) {
        return res.status(200).json({ success: true, productId });
      }
      return res.json({ success: false, message: "department not found" });
    })
    .catch((error) => res.status(400).json({ success: false, error }));
};

const createDepartment = async (req, res) => {
  await departmentsModel
    .insertMany(req.body.data)
    .then(() =>
      res.status(200).json({ success: true, message: "department added" })
    )
    .catch((error) => res.status(400).json({ success: false, error }));
};

const updateDepartment = async (req, res) => {
  await departmentsModel
    .findByIdAndUpdate(req.params.id, req.body.data)
    .then((result) => res.status(200).json({ success: true, result }))
    .catch((err) => res.status(400).json({ success: false, message: err }));
};
const deleteDepartment = async (req, res) => {
  await departmentsModel
    .findByIdAndDelete(req.params.id)
    .then(() => res.status(300).json({ success: true }))
    .catch((err) => res.status(400).json({ success: false, err }));
};

module.exports = {
  getDepartment,
  getDepartmentById,
  createDepartment,
  updateDepartment,
  deleteDepartment,
};
