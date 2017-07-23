(function() {
  'use strict'

  angular.module('app')
    .component('itemsList', {
      templateUrl: './js/list/items-list.template.html',
      controller: controller
    })

    controller.$inject = ['API_BASE_URL', '$http', '$state', 'SessionsService', 'UsersService', 'itemListService']
    function controller(baseUrl, $http, $state, SessionsService, UsersService, itemListService) {
      const vm = this

      vm.user = {}
      vm.$onInit = onInit
      vm.toggleItemShow = toggleItemShow
      vm.showItem = showItem


      function onInit () {
        itemListService.refresh()
        vm.items = itemListService.items
      }

      function showItem (id) {
        console.log(id);
        $state.go('showItem', {id})
      }

      function toggleItemShow() {
        vm.addingItem = !vm.addingItem
      }
    }


})()
