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
      url: '/',
      component: 'app',
    })
    .state({
      name: 'allItems',
      parent: 'app',
      url: 'items/all',
      component: 'allItems',
    })
    .state({
      name: 'showItem',
      parent: 'app',
      url: 'items/:id',
      component: 'showItem',
    })
    .state({
      name: 'itemsForm',
      parent: 'app',
      url: 'new',
      component: 'itemsForm',
      onEnter: function(){
        let trigger = true
      },
      onExit: function(){
        let trigger = false
      }
    })
  }

}())
