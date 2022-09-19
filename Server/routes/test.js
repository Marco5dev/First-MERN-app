const express = require('express');
const router = express.Router();

// ipmorts controllers
const { getTest } = require("../controllers/test")

// api
router.get("/test", getTest)

module.exports = router;