module.exports = (sequelize, DataTypes) => {
  const SongAlbum = sequelize.define('SongAlbum', {}, { timestamps: false });

  SongAlbum.associate = (models) => {
    models.Song.belongsToMany(models.Album, {
      foreignKey: 'songId',
      as: 'albuns',
      otherKey: 'albumId',
      through: SongAlbum,
    });
    models.Album.belongsToMany(models.Song, {
      foreignKey: 'albumId',
      as: 'songs',
      otherKey: 'songId',
      through: SongAlbum,
    });
  };
  return SongAlbum;
}