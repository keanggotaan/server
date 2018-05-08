'use strict';
module.exports = (sequelize, DataTypes) => {
  var Dpd = sequelize.define('Dpd', {
    name: DataTypes.STRING,
    address: DataTypes.STRING
  }, {});
  Dpd.associate = function(models) {
    // associations can be defined here
  };
  return Dpd;
};