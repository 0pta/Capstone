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
        $http.get(`${baseUrl}/api/items`)
        .then(response => {
          vm.items = response.data
        })
        .catch(err => {
          console.log(err)
        })

        $http.get(`${baseUrl}/api/images`)
        .then(response => {
          vm.images = response.data
        })
        .catch(err => {
          console.log(err)
        })
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
