const dotenv = require("dotenv").config();
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.dialect,
    operatorsAliases: 0,
    logging: 0,
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.employee_tasks = require("./employeetask.model")(sequelize, Sequelize);
db.client_details = require("./clientdetail.model")(sequelize, Sequelize);
db.bga_details = require("./bgadetail.model")(sequelize, Sequelize);
db.departments = require("./department.model")(sequelize, Sequelize);

module.exports = db;
