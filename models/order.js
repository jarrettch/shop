module.exports = function(sequelize, DataTypes) {
  var Order = sequelize.define('Order', {
    ordernumber: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Order.hasMany(models.Product)
      }
    }
  })

  return Order
}