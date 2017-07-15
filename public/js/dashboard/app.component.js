(function() {
  'use strict'

  angular.module('app')
    .component('app', {
      templateUrl: './js/dashboard/app.template.html',
      controller: controller
    })

    controller.$inject = ['API_BASE_URL', '$http']
    function controller(baseUrl, $http) {
      const vm = this

      vm.$onInit = onInit

      function onInit () {
        console.log('component app loaded')

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

        $http.get(`${baseUrl}/api/locations`)
        .then(response => {
          vm.locations = response.data
        })
        .catch(err => {
          console.log(err)
        })

        $http.get(`${baseUrl}/api/item_locations`)
        .then(itemLocations => {
          vm.itemLocations = itemLocations.data
        })
        .catch(err => {
          console.log(err)
        })


      }
    }

}())
