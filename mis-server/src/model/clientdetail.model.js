module.exports = (sequelize, Sequelize) => {
    const TableName = `client_details`;
    const ClientDetails = sequelize.define(
      TableName,
      {
        ClientID: {
          type: Sequelize.BIGINT,
          primaryKey: true,
        },
        Name: {
          type: Sequelize.STRING,
        },
        Description: {
          type: Sequelize.BIGINT,
        },
        CreatedAt: {
          type: Sequelize.STRING,
        },
        UpdatedAt: {
          type: Sequelize.STRING,
        },
        CreatedBy: {
          type: Sequelize.BIGINT,
        },
        UpdatedBy: {
          type: Sequelize.BIGINT,
        },
      },
      {
        timestamps: false,
        freezeTableName: true,
      }
    );
    ClientDetails.removeAttribute("id");
    return ClientDetails;
  };
  