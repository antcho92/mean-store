console.log('productsController loaded');
app.controller('productsController', ['$scope', 'productsFactory', function($scope, pF) {
  pF.index(function(products) {
    self.products = products;
  });
  var self = this;
  this.create = function() {
    pF.create(this.product, function(product) {
      self.products.push(product);
      self.product = {};
    });
  }
}]);
