var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = (function() {
  return {
    index: function(req, res) {
      Product.find({}, function(err, products) {
        if (err) {
          res.json(err);
        } else {
          res.json(products);
        }
      })
    },
    create: function(req, res) {
      console.log(req.body);
      var productInstance = new Product(req.body);
      productInstance.save(function(err, newProduct) {
        if (err) {
          res.json(err);
        } else {
          res.json(newProduct);
        }
      })
    }
  }
})();
