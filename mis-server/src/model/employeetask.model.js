module.exports = (sequelize, Sequelize) => {
  const TableName = `employee_tasks`;
  const EmployeeTasks = sequelize.define(
    TableName,
    {
      TaskID: {
        type: Sequelize.BIGINT,
        primaryKey: true,
      },
      Name: {
        type: Sequelize.STRING,
      },
      Duration: {
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
  EmployeeTasks.removeAttribute("id");
  return EmployeeTasks;
};
