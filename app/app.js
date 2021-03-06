'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngResource',
  'ngMessages',
  'myApp.view1',
  'myApp.view2',
  'myApp.demo',
  'myApp.shop',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider
  .when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  })
  .when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  })
  .when('/demo',{
    templateUrl:'demo/demo.html',
    controller:'DemoCtrl',
    controllerAs:'ctrl'
  })
  .when('/shop',{
    templateUrl:'shop/shop.html',
    controller:'ShopCtrl',
    controllerAs:'ctrl1'
  })
  .otherwise({redirectTo: '/view1'});

}]).run(function($rootScope){
  $rootScope.quantite = 0 ;
});



