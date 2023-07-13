const db = require("../model");
const ClientDetails = db.client_details;

exports.All_ClientDetails = (req, res) => {
    ClientDetails.findAll()
    .then((result) => {
      return res.status(200).send(result);
    })
    .catch((err) => {
      return res.status(500).send(err.message);
    });
};
