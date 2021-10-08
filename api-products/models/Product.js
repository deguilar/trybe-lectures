module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  });

 Product.associate = (models) => {
   Product.belongsTo(models.User, { as: 'user', foreignKey: 'userId' })
 }

  return Product;
}
