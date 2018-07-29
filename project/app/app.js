var app = angular.module("app",['ui.router']);

module.exports = app;

app.config( function($stateProvider, $urlRouterProvider) {

  $stateProvider.state("main",
  {
    url: "/",
    templateUrl: './app/templates/main.html'
  })
  .state("home",
  {
    url: "/home",
    templateUrl: './app/templates/home.html'
  });

  $stateProvider.state("dashboard",
  {
    url: "/dashboard",
    templateUrl: './app/templates/dashboard.html',
    controller: 'dashboardCtrl'
  })
  .state("dashboard.apis", {
    views: {
      'content': {
        url: '/apis',
        templateUrl: './app/templates/dashboard-apis.html',
        controller: 'dashboardApisCtrl'

      }
    }
  })
  .state("dashboard.times", {
    views: {
      'content': {
        url: '/times',
        templateUrl: './app/templates/dashboard-times.html',
        controller: 'dashboardTimesCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise("/");

});
