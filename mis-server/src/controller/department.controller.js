const db = require("../model");
const Department = db.departments;

exports.All_Departments = (req, res) => {
  Department.findAll()
    .then((result) => {
      return res.status(200).json({
        status: "success",
        data: result,
      });
    })
    .catch((err) => {
      return res.status(500).json({
        status: "Error",
        error: err,
      });
    });
};
