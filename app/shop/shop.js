'use strict';
angular.module('myApp.shop', ['ngRoute'])
    .controller('ShopCtrl', ['$scope', '$timeout', 'ShopService','$rootScope', function ($scope, $timeout, ShopService,$rootScope) {
         
        $scope.list = [];
        $scope.somme = 0;
        $scope.showmessage = false ;

        $scope.dataImage = ShopService.getImageViaResource();
        console.log($scope.data1)
        $scope.dataImage.$promise.then(function () {
            console.log($scope.data1)
        });
        $scope.dataImage.forEach(function (image) {
            image.text = image.id + ' ' + image.userId + ' ' + image.title;
        });

        $scope.panier = function () {
            console.log('je suis dans la function panier');
            if ($scope.nombre && $scope.selected) {
                $scope.list.push(
                    {
                        nombre: $scope.nombre,
                        album: $scope.selected
                    });
                $scope.somme = $scope.nombre + $scope.somme;
            }

        };
        $scope.supprimer = function (index) {
            console.log('je suis dans la function supprimer');
            $scope.list.splice(index, 1);
        }
        $scope.acheter = function () {
            
            console.log('je suis dans la funtion acheter ')
            if ($scope.list.length != 0) {
                $scope.showmessage = true;
                $timeout(function(){
                 $scope.showmessage = false ;
                },5000)
                $scope.resultat = 'Votre commande de ' + $scope.somme + ' albums a été effectuée '
                console.log($scope.somme);
            }
             $rootScope.quantite += $scope.somme;
        }
        
    }]);