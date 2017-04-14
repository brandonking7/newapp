const angular = require('angular');
require('angular-ui-router');

angular
  .module('newapp', ['ui.router'])
  .config(uiRouterSetup);

  uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];

  function uiRouterSetup($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
      url: '/',
      template: '<home></home>'
    });
  $urlRouterProvider.otherwise('/');
  }
