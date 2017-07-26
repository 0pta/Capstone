
(function() {
  'use strict'

  angular.module('app')
  .config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider){
    $locationProvider.html5Mode(true)

    $stateProvider
    .state({
      name: 'app',
      url: '/app',
      component: 'app',
      requiresLogin: true
    })
    .state({
      name: 'login',
      url: '/',
      component: 'login'
    })
    .state({
      name: 'allItems',
      parent: 'app',
      url: '/items/all',
      component: 'allItems',
      requiresLogin: true
    })
    .state({
      name: 'showItem',
      parent: 'app',
      url: '/items/:id',
      component: 'showItem',
      requiresLogin: true
    })
    .state({
      name: 'itemsForm',
      parent: 'app',
      url: '/new',
      component: 'itemsForm',
      requiresLogin: true
    })
  }

}())
