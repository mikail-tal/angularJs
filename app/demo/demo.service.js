'use strict';
angular.module('myApp.demo')
.service('DemoService',['$filter',function($filter){
    
    this.mafonctionprive =function(){}

    this.compute = function(person) {
        return person.nom +' '+ person.prenom +' '+$filter('yearToMonth')(person.age)+(person.age >10 ? 'grand':'petit');
    }
}]);