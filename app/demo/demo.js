'use strict';
angular.module('myApp.demo', ['ngRoute'])

    .controller('DemoCtrl', ['$scope', 'DemoService','$q','$timeout','$location', function ($scope, DemoService,$q,$timeout,$location) {
        $scope.person = {};

        $scope.books = [{ 'id': 1, 'author': 'Jack', 'title': 'Moi' },
        { 'id': 2, 'author': 'John', 'title': 'Mon ami' },
        { 'id': 3, 'author': 'Max', 'title': 'L\'autre' }];

        //console.log($location.path())
       // console.log($location.search())
      

         $scope.email =$location.search().email
        // console.log($scope.email);
         $scope.motdepasse = $location.search().pwd
         //console.log($scope.motdepasse)
         $scope.submit=function(){
         $location.path('/view1');
     }







        $scope.books.forEach(function (book) {
            book.text = book.id + ' ' + book.author + ' ' + book.title;
        });
       

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

        $scope.myStyle = function () {
            return " background-color : yellow";


        };
        $scope.$watch('email', 'motdepasse', function () {

        });
        var promise = DemoService.getPosts();
        promise.then(function (reponses) {
           // console.log(reponses);
            $scope.datas = reponses.data;
            return 'promise resolved avec $http'
        
        });
       $scope.data1 = DemoService.getPostsViaResource();
          // console.log($scope.data1)
       $scope.data1.$promise.then(function(){
          // console.log($scope.data1)
       });   
        var defer = $q.defer();
           console.log(defer)
        defer.promise.then(function(val){
            console.log(val)
        },function(error) {
            console.log(error)
        }) 
        $timeout(function(){
         defer.reject('error');
        },4000)
      
    }]);
