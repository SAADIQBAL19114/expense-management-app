const express = require("express");
const {addTransection ,getAllTransections} = require ('../controllers/transectionController')

// router object
const router = express.Router();

// routers
// add transection POST Method
router.post('/add-transection', addTransection)

// get transection
router.post('/get-transection',getAllTransections)

module.exports = router;
