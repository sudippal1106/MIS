const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const fileupload = require("express-fileupload");
const path = require("path");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("files"));
app.use("/data", express.static(path.join(__dirname, "data")));

const ProjectName = `MIS portal`;
const AccessOrigin = `Access-Control-Allow-Origin`;
const Message = `Welcome To ${ProjectName} Application Backend`;
const Options = `*`;
const PORT = process.env.PORT;

app.options(Options, cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.json({ message: Message });
  res.send();
});

app.use(fileupload());
app.use(express.static("files"));

const database = require(`./src/model`);

database.sequelize.sync();

const defaultURL = "/api";

const employeeTask = require("./src/route/employeetask.route");
const clientDetail = require("./src/route/clientdetail.route");
const bgaDetail = require("./src/route/bgadetail.route");
const departments = require("./src/route/department.route");

app.use(defaultURL, employeeTask);
app.use(defaultURL, clientDetail);
app.use(defaultURL, bgaDetail);
app.use(defaultURL, departments);

app.listen(PORT, () => {
  console.log(`${ProjectName} Server is running on port ${PORT}.`);
});
