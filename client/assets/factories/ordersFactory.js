app.factory('ordersFactory', ['$http', function($http) {
  function OrdersFactory() {
    var self = this;
    this.index = function(callback) {
      $http.get('/orders').then(function(res) {
        callback(res.data)
      })
    }
    this.create = function(order, callback) {
      $http.post('/orders', order).then(function(res) {
        console.log(res);
        self.index(callback);
      })
    }
  }
  return new OrdersFactory();
}])
