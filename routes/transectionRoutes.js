const express = require("express");
const {
  addTransection,
  getAllTransections,
  editTransection,
  deleteTransection,
} = require("../controllers/transectionController");

// router object
const router = express.Router();

// routers
// add transection POST Method
router.post("/add-transection", addTransection);

// edit transection POST Method
router.post("/edit-transection", editTransection);

// delete transection POST Method
router.post("/delete-transection", deleteTransection);

// get transection
router.post("/get-transection", getAllTransections);

module.exports = router;
