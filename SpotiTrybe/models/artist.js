module.exports = (sequelize, DataTypes) => {
  const Artist = sequelize.define('Artist', {
    name: DataTypes.STRING,
    country: DataTypes.STRING,
    genre: DataTypes.STRING,
  });
  return Artist;
};