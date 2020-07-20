'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    title: DataTypes.STRING,
    desc: DataTypes.TEXT,
    // takesPlaceOn: DATE,
    imgUrl: DataTypes.STRING //add this line (don't forget the comma above!)
  }, {});
  Event.associate = function(models) {
    Event.hasMany(models.Rsvp);
  };
  return Event;
};
