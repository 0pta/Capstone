
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
      component: 'app',
      abstract: true,
      requiresLogin: true
    })
    .state({
      name: 'login',
      url: '/',
      component: 'login'
    })
    .state({
      name: 'dashboard',
      parent: 'app',
      url: '/dashboard',
      component: 'dashboard',
      css: 'stylesheets/dashboard.css',
      requiresLogin: true
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
