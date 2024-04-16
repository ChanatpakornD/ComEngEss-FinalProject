const express = require("express");
const { getWord } = require("../controllers/wordController");

const router = express.Router();

router.get("/", getWord);

module.exports = router;
