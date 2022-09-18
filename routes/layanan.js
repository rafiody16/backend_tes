const express = require("express");
const router = express.Router();
const layananController = require("../controllers/layananController");

router.post("/register", layananController.createLayanan);

module.exports = router;