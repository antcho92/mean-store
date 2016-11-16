console.log('customersFactory loaded')
app.factory('customersFactory', ['$http', function($http) {
  function CustomersFactory() {
    var self = this;
    this.index = function(callback) {
      $http.get(`/customers`).then(function(res) {
        callback(res.data);
      })
    }
    this.create = function(customer, callback) {
      console.log(customer)
      $http.post(`/customers`, customer).then(function(res) {
        console.log(res.data);
        callback(res.data.errors, res.data);
      })
    }
    this.delete = function(id, callback) {
      $http.delete(`/customers/${id}`).then(function(res) {
        console.log(res.data);
        callback(res.data);
      })
    }
  }
  console.log(new CustomersFactory())
  return new CustomersFactory();
}])
