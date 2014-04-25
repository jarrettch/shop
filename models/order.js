

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
  
  Order
    .build({ ordernumber: 1 })
    .save()
    .success(function() {
      console.log("success")
    }).error(function(error) {
      throw error
    })

  return Order
}