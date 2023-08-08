module.exports = (sequelize, Sequelize) => {
  const TableName = `departments`;
  const Department = sequelize.define(
    TableName,
    {
      DepartmentID: {
        type: Sequelize.BIGINT,
        primaryKey: true,
      },
      Name: {
        type: Sequelize.STRING,
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
  Department.removeAttribute("id");
  return Department;
};
