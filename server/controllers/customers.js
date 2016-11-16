var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');


module.exports = (function() {
  return {
    index: function(req, res) {
      Customer.find({}, function(err, customers) {
        if (err) {
          res.json(err)
        } else {
          res.json(customers);
        }
      })
    },
    create: function(req, res) {
      console.log(req.body);
      customerInstance = new Customer(req.body);
      customerInstance.save(function(err, newCustomer) {
        if (err) {
          res.json(err);
        } else {
          res.json(newCustomer);
        }
      })
    },
    delete: function(req, res) {
      console.log(req.params.id);
      Customer.remove({_id: req.params.id}, function(err) {
        if (err) {
          res.json(err);
        } else {
          Customer.find({}, function(err, customers) {
            res.json(customers);
          })
        }
      })
    },
    
  }
})()
