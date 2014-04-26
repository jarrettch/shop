var db = require('../models')
/*
 * GET orders listing.
 */

exports.list = function(req, res){
  res.send({
   // orders: Order.findAll
  });
};

exports.create = function(req, res) {
  db.Order.find({ where: { id: req.param('order_id') } }).success(function(order) {
    db.Order.create({ ordernumber: req.param('ordernumber') }).success(function(ordernumber) {
      ordernumber.setUser(user).success(function () {
       return Order
      })
    })
  })
}
