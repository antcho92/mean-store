console.log('productsFactory loaded')
app.factory('productsFactory', ['$http', function($http) {
  function ProductsFactory() {
    var self = this;
    this.index = function(callback) {
      $http.get('/products').then(function(res) {
        callback(res.data);
      })
    };
    this.create = function(product, callback) {
      $http.post('/products', product).then(function(res) {
        callback(res.data);
      })
    }
  }
  return new ProductsFactory();
}])
