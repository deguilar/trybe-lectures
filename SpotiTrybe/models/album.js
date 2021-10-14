module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    title: DataTypes.STRING,
    releaseDate: DataTypes.DATE,
    artistId: DataTypes.INTEGER
  });
  return Album;
};