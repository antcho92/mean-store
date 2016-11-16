var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var Product = mongoose.model('Product');
var Customer = mongoose.model('Customer');

module.exports = (function() {
  return {
    index: function(req, res) {
      Order.find({})
      .populate('_customer')
      .populate('_product')
      .exec(function(err, orders) {
        if (err) {
          res.json(err);
        } else {
          res.json(orders);
        }
      })
    },
    create: function(req, res) {
      Customer.findOne({_id: req.body.customer}, function(err, customer) {
        if (err) {
          res.json(err);
        } else {
          Product.findOne({_id: req.body.product}, function(err, product) {
            if (err) {
              res.json(err);
            } else {
              product.quantity -= req.body.quantity;
              product.save(function(err, product) {
                if (err) {
                  res.json(err);
                } else {
                  var orderInstance = new Order({quantity: req.body.quantity})
                  //adding customer and product ids to order
                  orderInstance._customer = customer._id;
                  orderInstance._product = product._id;
                  orderInstance.save(function(err, order) {
                    if (err) {
                      res.json(err);
                    } else {
                      //adding order to customer and product now
                      customer.orders.push(orderInstance);
                      customer.save(function(err) {
                        if (err) {
                          res.json(err)
                        } else {
                          product.orders.push(orderInstance);
                          product.save(function(err) {
                            if (err) {
                              res.json(err)
                            } else {
                              res.json(order)
                            }
                          })
                        }
                      })
                    }
                  })
                }
              })
            }
          })
        }
      })
    }
  }
})();
