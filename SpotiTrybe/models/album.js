module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    title: DataTypes.STRING,
    releaseDate: DataTypes.DATE,
    artistId: DataTypes.INTEGER
  });

  Album.associate = (models) => {
    Album.belongsTo(models.Artist, {
      foreignKey: 'artistId', as: 'artist'
    })
  }
  return Album;
};