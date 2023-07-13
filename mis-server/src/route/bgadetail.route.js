const controller = require("../controller/bgadetail.controller");
const express = require("express");
const Path = `/bgadetails`;
const router = express.Router();

router.get(`${Path}`, controller.All_BgaDetails);
router.post(`${Path}`, controller.New_BgaDetails);

module.exports = router;
