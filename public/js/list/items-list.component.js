(function() {
  'use strict'

  angular.module('app')
    .component('itemsList', {
      templateUrl: './js/list/items-list.template.html',
      controller: controller
    })

    controller.$inject = ['API_BASE_URL', '$http', '$state', 'SessionsService', 'UsersService']
    function controller(baseUrl, $http, $state, SessionsService, UsersService) {
      const vm = this

      vm.user = {}
      vm.$onInit = onInit
      vm.toggleItemShow = toggleItemShow
      vm.showItem = showItem


      function onInit () {
        vm.items = []
        $http.get(`${baseUrl}/api/users/${SessionsService.user.id}/items`)
        .then(response => {
          console.log(response);
          vm.itemIds = response.data.map(item => item.id)
          return vm.itemIds.forEach(id => {
            $http.get(`${baseUrl}/api/users/${SessionsService.user.id}/items/${id}`)
            .then(response => {
              vm.items.push(response.data)
            })
          })
        })
        .catch(err => {
          console.log(err)
        })
        console.log(vm.items);
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
