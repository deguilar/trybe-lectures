module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    title:  DataTypes.STRING,
    durationTime: DataTypes.INTEGER,
  })
  return Song;
}