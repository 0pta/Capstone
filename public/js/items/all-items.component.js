(function() {
  'use strict'

  angular.module('app')
    .component('allItems', {
      templateUrl: './js/items/all-items.template.html',
      controller: controller
    })

    controller.$inject = ['API_BASE_URL', '$http', '$state']
    function controller(baseUrl, $http, $state) {
      const vm = this

      vm.$onInit = onInit
      vm.toggleItemShow = toggleItemShow
      vm.deleteItem = deleteItem
      vm.showItem = showItem

      function onInit () {

        $http.get(`${baseUrl}/api/items`)
        .then(response => {
          vm.items = response.data

        })
        .catch(err => {
          console.log(err)
        })
      }

      function deleteItem (id) {
        $http.delete(`${baseUrl}/api/items/${id}`)
        .then(() => {
          console.log(`DELETED ITEM #${id}`)
          vm.deleteMsg = `DELETED ITEM #${id}`
          vm.items = vm.items.filter(item => {
            return item.id != id
          })
        })
      }

      function showItem (id) {
        console.log(id);
        $state.go('showItem', {id})
      }

      function toggleItemShow() {
        vm.showingItem = !vm.showingItem
      }
    }

})()
