var app = angular.module('sampleApp', ['ui.router','ngResource']);
app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider

        // route for the home page
        .state('app', {
            url:'/',
            templateUrl: 'home/home.html'
        })
        // route for the aboutus page
        .state('view', {
            url:'/view/:id',
            templateUrl: 'details/details.html'
        })

        .state('tab1', {
            url:'/tab1',
            templateUrl: 'tab1/tab1.html'
        })

        .state('tab2', {
            url:'/tab2',
            templateUrl: 'tab2/tab2.html'
        });

        $urlRouterProvider.otherwise('/error');
        $locationProvider.html5Mode(true);
});
