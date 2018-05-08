'use strict';
module.exports = (sequelize, DataTypes) => {
  var Dpc = sequelize.define('Dpc', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    dpd_id: DataTypes.INTEGER
  }, {});
  Dpc.associate = function(models) {
    // associations can be defined here
  };
  return Dpc;
};