
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var order = require('./routes/order');
var product = require('./routes/product');
var http = require('http');
var path = require('path');
var db = require('./models');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
app.get('/', routes.index);
// Users
app.get('/users', user.list);

// Orders
app.get('/orders', order.list);
// app.post('/orders/create', order.create);
app.get('/orders/:order_id/destroy', order.list);

// Products
app.get('/orders/products', product.list);
// app.post('/orders/:order_id/products/create', product.create);
app.get('/orders/:order_id/products/:product_id/destroy', product.list);


// Sequelize
db
  .sequelize
  .sync({ force: true })
  .complete(function(err) {
    if (err) {
      throw err
    } else {
      http.createServer(app).listen(app.get('port'), function(){
        console.log('Express server listening on port ' + app.get('port'));
      });
    }
  })

