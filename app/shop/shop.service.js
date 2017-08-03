'use strict';
angular.module('myApp.shop')
    .service('ShopService', [ 'config','$resource', function (config, $resource) {
        
        
        this.logConfig = function () {
            console.log(config.apiUrl);
        }
       
        this.getImageViaResource = function () {
            return $resource(config.apiUrl).query();
        }

    }])