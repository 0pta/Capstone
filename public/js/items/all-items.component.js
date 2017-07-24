(function() {
  'use strict'

  angular.module('app')
    .component('allItems', {
      templateUrl: './js/items/all-items.template.html',
      controller: controller
    })

    controller.$inject = ['API_BASE_URL', '$http', '$state', 'SessionsService', '$timeout']
    function controller(baseUrl, $http, $state, SessionsService, $timeout) {
      const vm = this

      vm.$onInit = onInit
      vm.toggleItemShow = toggleItemShow
      vm.deleteItem = deleteItem
      vm.showDeleteMsg = showDeleteMsg
      vm.showItem = showItem

      function onInit () {
        vm.showingDelete = false
        $http.get(`${baseUrl}/api/users/${SessionsService.user.id}/items`)
        .then(response => {
          vm.items = []
          vm.itemIds = response.data.map(item => item.id)
          return vm.itemIds.forEach(id => {
            $http.get(`${baseUrl}/api/users/${SessionsService.user.id}/items/${id}`)
            .then(response => {
              vm.items.push(response.data)
              console.log(vm.items);
            })
          })
        })
        .catch(err => {
          console.log(err)
        })
      }

      function deleteItem (id) {
        showDeleteMsg()
        $http.delete(`${baseUrl}/api/items/${id}`)
        .then(() => {
          vm.deleteMsg = `DELETED ITEM #${id}`
          vm.items = vm.items.filter(item => {
            return item.id != id
          })
        })
      }
      function showDeleteMsg () {
        vm.showingDelete = true
        $timeout(function(){
          vm.showingDelete = false;
       }, 3000);

      }
      function showItem (id) {
        console.log(id)
        $state.go('showItem', {id})
      }

      function toggleItemShow() {
        vm.showingItem = !vm.showingItem
      }
    }

})()
