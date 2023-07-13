const controller = require("../controller/employeetask.controller");
const express = require("express");
const Path = `/employeetasks`;
const router = express.Router();

router.get(`${Path}`, controller.All_EmployeeTasks);

module.exports = router;
