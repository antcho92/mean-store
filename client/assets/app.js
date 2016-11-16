console.log('app.js file loaded');
var app = angular.module('app', ['ngRoute', 'angularMoment']);

app.run(function(amMoment) {
    amMoment.changeLocale('de');
});

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/dashboard.html'
    })
    .when('/customers', {
      templateUrl: 'partials/customers.html',
      controller: 'customersController',
      controllerAs: 'cC'
    })
    .when('/products', {
      templateUrl: 'partials/products.html',
      controller: 'productsController',
      controllerAs: 'pC'
    })
    .when('/orders', {
      templateUrl: 'partials/orders.html',
      controller: 'ordersController',
      controllerAs: 'oC'
    })
    .otherwise('/');
})
