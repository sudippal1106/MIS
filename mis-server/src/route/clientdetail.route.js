const controller = require("../controller/clientdetail.controller");
const express = require("express");
const Path = `/clientdetails`;
const router = express.Router();

router.get(`${Path}`, controller.All_ClientDetails);

module.exports = router;
