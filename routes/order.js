
/*
 * GET orders listing.
 */

exports.list = function(req, res){
  res.send( {
    // orders: Order.findAll
  });
};

exports.create = function(req, res) {
  res.send( {
    // orders: Order.create(attributes).success()
  })
}