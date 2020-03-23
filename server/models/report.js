'use strict';
module.exports = (sequelize, DataTypes) => {
  const Report = sequelize.define('Report', {
    name: DataTypes.STRING,
    cases: DataTypes.INTEGER,
    deaths: DataTypes.INTEGER,
    recovered: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    CountryId: DataTypes.INTEGER
  }, {});
  Report.associate = function(models) {
    // associations can be defined here
    Report.belongsTo(models.User);
    Report.belongsTo(models.Country);
  };
  return Report;
};