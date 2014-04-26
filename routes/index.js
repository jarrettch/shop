var db = require('../models')
/*
 * GET home page.
 */

exports.index = function(req, res){
  db.Order.all({
    include: [ db.Product ]
  }).success(function(orders) {
    res.render('index', {
      title: 'Express',
      orders: orders
    })
  })
  // res.render('index', { title: 'Express' });
};