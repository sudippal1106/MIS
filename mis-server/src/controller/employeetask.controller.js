const db = require("../model");
const EmployeeTasks = db.employee_tasks;

exports.All_EmployeeTasks = (req, res) => {
  EmployeeTasks.findAll()
    .then((result) => {
      return res.status(200).send(result);
    })
    .catch((err) => {
      return res.status(500).send(err.message);
    });
};
