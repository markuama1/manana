var app = angular.module('ParkPlannerX', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'manana-UI/index.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);