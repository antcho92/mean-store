app.controller('ordersController', ['$scope', 'ordersFactory', function($scope, oF) {
  var self = this;
  var setOrders = function(orders) {
    self.orders = orders;
  }
  oF.index(setOrders);
  this.create = function() {
    oF.create(this.order, setOrders);
  }
}])
