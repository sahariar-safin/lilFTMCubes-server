const express = require("express");

const massage = require("../controllers/massage.js");

const router = express.Router();

router.get('/', massage.getMassage);
router.post('/', massage.addMassage);
router.delete('/:id', massage.deleteMassage);

module.exports = router;