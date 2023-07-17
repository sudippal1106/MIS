module.exports = (sequelize, Sequelize) => {
  const TableName = `bga_details`;
  const BgaDetails = sequelize.define(
    TableName,
    {
      BGAID: {
        type: Sequelize.BIGINT,
        primaryKey: true,
      },
      ClientID: {
        type: Sequelize.BIGINT,
      },
      Niagoscrub: {
        type: Sequelize.INTEGER,
      },
      Examordering: {
        type: Sequelize.INTEGER,
      },
      Doctyping: {
        type: Sequelize.INTEGER,
      },
      Apsscrubbing: {
        type: Sequelize.INTEGER,
      },
      Carrierscrub: {
        type: Sequelize.INTEGER,
      },

      Submission: {
        type: Sequelize.INTEGER,
      },
      DataEntry: {
        type: Sequelize.INTEGER,
      },
      CreatedAt: {
        type: Sequelize.STRING,
      },
      UpdatedAt: {
        type: Sequelize.STRING,
      },
      CreatedBy: {
        type: Sequelize.INTEGER,
      },
      UpdatedBy: {
        type: Sequelize.INTEGER,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  BgaDetails.removeAttribute("id");
  return BgaDetails;
};
