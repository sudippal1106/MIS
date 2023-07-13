const db = require("../model");
const BgaDetails = db.bga_details;

exports.All_BgaDetails = (req, res) => {
    BgaDetails.findAll()
    .then((result) => {
      return res.status(200).send(result);
    })
    .catch((err) => {
      return res.status(500).send(err.message);
    });
};

exports.New_BgaDetails = (req, res) => {
    BgaDetails.create(req.body)
      .then((result) => {
        return res.status(200).send(result);
        console.log("heee2")
      })
      .catch((err) => {
        console.log("heee11")
        // logger.error("Error in BgaDetails");
        // logger.error(err.message);
        res.status(500).send({
          message: err.message,
        });
      });
  };
// exports.BgaDetails_id = (req, res) => {
//   const BGAID = req.params.id;
//   BgaDetails.findOne({
//     where: {
//       BGAID: BGAID,
//     },
//   })
//     .then((result) => {
//       return res.status(200).send(result);
//     })
//     .catch((err) => {
//       logger.error("Error in BgaDetails_id");

//       logger.error(err.message);

//       res.status(500).send({
//         message: err.message,
//       });
//     });
// };

// exports.BgaDetails_delete_id = (req, res) => {
//   const BGAID = req.params.id;
//   BgaDetails.destroy({
//     where: {
//       BGAID: BGAID,
//     },
//   })
//     .then((result) => {
//       return res.status(200).send({ message: `successfully deleted` });
//     })
//     .catch((err) => {
//       logger.error("Error in BgaDetails_delete_id");
//       logger.error(err.message);
//       res.status(500).send({
//         message: err.message,
//       });
//     });
// };

// exports.Update_BgaDetails = (req, res) => {
//   const BGAID = req.params.id;
//   BgaDetails.update(req.body, {
//     where: {
//         BGAID: BGAID,
//     },
//   })
//     .then((result) => {
//       return res.status(200).send(result);
//     })
//     .catch((err) => {
//       logger.error("Error in Update_BgaDetails");

//       logger.error(err.message);

//       res.status(500).send({
//         message: err.message,
//       });
//     });
// };

// exports.New_BgaDetails = (req, res) => {
//     BgaDetails.create(req.body)
//     .then((result) => {
//       return res.status(200).send(result);
//     })
//     .catch((err) => {
//       logger.error("Error in New_BgaDetails");
//       logger.error(err.message);
//       res.status(500).send({
//         message: err.message,
//       });
//     });
// };