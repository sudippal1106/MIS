const db = require("../model");
const BgaDetails = db.bga_details;

//get all BGA
exports.All_BgaDetails = (req, res) => {
  BgaDetails.findAll()
    .then((result) => {
      return res.status(200).send(result);
    })
    .catch((err) => {
      return res.status(500).send(err.message);
    });
};

// create NEW BGA
exports.New_BgaDetails = (req, res) => {
  // console.log("BGA is ", req.body);
  BgaDetails.bulkCreate(req.body)
    .then((result) => {
      return res.status(200).json({
        status: "success",
        data: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "error",
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
