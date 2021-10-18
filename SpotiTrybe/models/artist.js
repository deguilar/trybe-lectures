module.exports = (sequelize, DataTypes) => {
  const Artist = sequelize.define('Artist', {
    name: DataTypes.STRING,
    country: DataTypes.STRING,
    genre: DataTypes.STRING,
  });

  Artist.associate = (models) => {
    Artist.hasMany(models.Albums, {
      foreignKey: 'artistId', as: 'albums'
    });
  }
  return Artist;
};