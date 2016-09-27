var app = angular.module('computer', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider){

    $routeProvider
         .when('/main',
                {
                   templateUrl: 'main.html',
                   controller: 'MainCtrl'
        })
    .when('/vozila',
                {
                   templateUrl: 'vozila.html',
                   controller: 'VozilaCtrl'
        })
    .when('/prodaja',
                {
                   templateUrl: 'prodaja.html',
                   controller: 'ProdajaCtrl'
        })
    .when('/kontakt',
                {
                   templateUrl: 'kontakt.html',
                   controller: 'KontaktCtrl'
        })
    .otherwise ({ redirectTo: '/main'})
    
}])


.controller('MainCtrl', ['$scope', function($scope) {
    console.log($scope);
}]);

.controller('VozilaCtrl', ['$scope', function($scope) {
    console.log($scope);
}]);

.controller('ProdajaCtrl', ['$scope', function($scope) {
    console.log($scope);
}]);

.controller('KontaktCtrl', ['$scope', function($scope) {
    console.log($scope);
}]);