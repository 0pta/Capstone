(function() {
  'use strict'

  angular.module('app')
    .component('itemList', {
      templateUrl: '/js/items/item-list.template.html',
      controller: controller
    })

  function controller() {
    const vm = this

    vm.$onInit = onInit

    function onInit() {
      vm.items = [

      ]
    }

  }

}())
