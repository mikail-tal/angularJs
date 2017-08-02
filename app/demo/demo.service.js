'use strict';
angular.module('myApp.demo')
    .service('DemoService', ['$filter','$http', 'config','$resource', function ($filter,$http,config,$resource) {

        this.compute = function (person) {
            return person.nom + ' ' + person.prenom + ' ' + $filter('yearToMonth')(person.age) + (person.age > 10 ? 'grand' : 'petit');
        },
            this.logConfig = function () {
                console.log(config.apiUrl);
            }
            this.getPosts= function() {
                var promise = $http.get(config.apiUrl);
                return promise ;
            }
            this.getPostsViaResource=function(){
                return $resource(config.apiUrl).query();
            }
    }]);