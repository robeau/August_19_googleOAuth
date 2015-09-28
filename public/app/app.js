
var myApp = angular.module('AuthenticationApp', ['ui.router']);

myApp.config(function ($stateProvider, $urlRouterProvider) {
    console.log('running the following code in the configuration phase ... ');
    $urlRouterProvider.otherwise("/login");
    // set up the routers ...
    $stateProvider.state('login', {
        url: '/login',
        templateUrl: '_login.html',
        controller: 'LoginController'
    }).state('home', {
        url: '/home',
        templateUrl: '_home_authenticated.html'
    });

});

myApp.controller('LoginController', function ($scope, AuthenticationService) {
    $scope.message = 'Enter login details .... ';
    $scope.user = {
        username: '',
        password: ''
    };
    $scope.login = function () {
        AuthenticationService.login($scope.user).then(function (data) {
            console.log(data);
        }, function (data) {
            console.log(data);
        });
    };
});

myApp.factory('AuthenticationService', function ($http) {
    return {
        login: function (user) {
            console.log(user);
            return $http.post('/login', user); // returns a promise
        }
    };
});