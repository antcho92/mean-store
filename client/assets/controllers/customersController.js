console.log('customersController loaded')
app.controller('customersController', ['$scope', 'customersFactory', 'moment', function($scope, cF, moment) {
  var self = this;
  cF.index(function(customers) {
    self.customers = customers;
  });
  this.create = function() {
    cF.create(this.customer, function(err, customer) {
      if (err) {
        self.errors = err;
      } else {
        self.customers.push(customer);
        self.customer.name = '';
      }
    });
  };
  this.delete = function(id) {
    cF.delete(id, function(customers) {
      self.customers = customers;
    });
  }
}])
