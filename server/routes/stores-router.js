const router = require("express").Router();
const {
  getStore,
  getStoreById,
  createStore,
  updateStore,
  deleteStore,
} = require("../controllers/stores-ctrl");

router.get("/", getStore);
router.get("/getStoreById/:id", getStoreById);
router.post("/createStore", createStore);
router.put("/updateStore/:id", updateStore);
router.delete("/deleteStore", deleteStore);

module.exports = router;
