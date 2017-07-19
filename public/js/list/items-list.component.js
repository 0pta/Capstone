(function() {
  'use strict'

  angular.module('app')
    .component('itemsList', {
      templateUrl: './js/list/items-list.template.html',
      controller: controller
    })

    controller.$inject = ['API_BASE_URL', '$http', '$state']
    function controller(baseUrl, $http, $state) {
      const vm = this

      vm.$onInit = onInit
      vm.toggleItemShow = toggleItemShow
      vm.showItem = showItem

      function onInit () {
        vm.items = []
        $http.get(`${baseUrl}/api/items`)
        .then(response => {
          vm.itemIds = response.data.map(item => item.id)
          return vm.itemIds.forEach(id => {
            console.log(id);
            $http.get(`${baseUrl}/api/items/${id}`)
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
