(function() {
  'use strict'

  angular.module('app')
    .component('app', {
      templateUrl: './js/app.template.html',
      controller: controller
    })

    controller.$inject = ['API_BASE_URL', '$http', '$stateParams', '$state']
    function controller(baseUrl, $http, $stateParams, $state) {
      const vm = this

      vm.$onInit = onInit
      vm.toggleItemForm = toggleItemForm
      vm.buttonSymbol = '+'

      function onInit () {

        vm.addingItem = false

        $http.get(`${baseUrl}/api/item_locations`)
        .then(response => {
          vm.itemLocations = response.data
        })
        .catch(err => {
          console.log(err)
        })

      }


      function toggleItemForm () {
        vm.addingItem = !vm.addingItem

        if (vm.addingItem) {
          vm.buttonSymbol = '–'
          $state.go('itemsForm')
        } else {
          $state.go('app')
          vm.buttonSymbol = '+'
        }
      }

    }

}())
