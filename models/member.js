'use strict';
module.exports = (sequelize, DataTypes) => {
  var Member = sequelize.define('Member', {
    noKTA: DataTypes.SMALLINT,
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    pob: DataTypes.STRING,
    dob: DataTypes.STRING,
    address: DataTypes.STRING,
    job: DataTypes.STRING,
    dpc_id: DataTypes.INTEGER
  }, {});
  Member.associate = function(models) {
    // associations can be defined here
  };
  return Member;
};