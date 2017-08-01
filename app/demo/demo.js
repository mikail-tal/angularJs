'use strict';
angular.module('myApp.demo', ['ngRoute'])
    .controller('DemoCtrl', ['$scope', 'DemoService', function ($scope, DemoService) {
        $scope.person = {};
        $scope.books = [{ 'author': 'Jack', 'title': 'Moi' },
        { 'author': 'John', 'title': 'Mon ami' },
        { 'author': 'Max', 'title': 'L\'autre' }];

        $scope.friends = [
            { name: 'Laurent', phone: '555-1212', age: 30 },
            { name: 'Hedy', phone: '555-9876', age: 27 },
            { name: 'diogo', phone: '555-4321', age: 25 },
            { name: 'husref', phone: '555-5678', age: 35 },
            { name: 'suzanne', phone: '555-8765', age: 29 }
        ];
        $scope.$watch('person', function () {
            $scope.result = DemoService.compute($scope.person);
        }, true);
    }]);