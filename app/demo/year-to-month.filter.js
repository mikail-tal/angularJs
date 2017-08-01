'use strict';
angular.module('myApp.demo')
    .filter('yearToMonth', function () {
        return function (valeur) {
            return valeur * 12;
        }
    });