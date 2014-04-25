module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define('Product', {
    type: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Product.belongsTo(models.Order)
      }
    }
  })

  return Product
}