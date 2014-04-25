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

  Order.bulkCreate([
    { ordernumber: 2 },
    { ordernumber: 3 },
    { ordernumber: 4 }
    ]).success(function() {
      Order.findAll().success(function(orders) {
        console.log(orders)
      })
    })  

  return Order
}