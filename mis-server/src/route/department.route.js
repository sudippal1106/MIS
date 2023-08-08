const controller = require("./../controller/department.controller");
const express = require("express");
const path = "/departments";
const router = express.Router();

router.get(`${path}`, controller.All_Departments);

module.exports = router;
