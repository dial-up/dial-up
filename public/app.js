angular.module('App',
[
  'App.navbar',
  'App.footer',
  'App.eventList',
  'App.ideaCtrl',
  'App.ideaService',
  'App.ideaBtn',
  'App.gifService',
  'App.listCtrl',
  'App.signUpCtrl',
  'ngAnimate',
  'ui.router'
])

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/getidea');
  $stateProvider
  .state('home', {
    url: '/getidea',
    templateUrl: 'views/main.html',
    controller: 'IdeaController'
  })
  // $locationProvider.html5Mode(true);
  // routing for old view swap - not to be used with new look
  // .state('list', {
  //   url: '/:id',
  //   templateUrl: 'views/list.html',
  //   controller: 'ListController'
  // })
})
