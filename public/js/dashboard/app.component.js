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
        .then(items => {
          vm.items = items.data
        })
        .catch(err => {
          console.log(err)
        })

        $http.get(`${baseUrl}/api/images`)
        .then(images => {
          vm.images = images.data
        })
        .catch(err => {
          console.log(err)
        })

        $http.get(`${baseUrl}/api/locations`)
        .then(locations => {
          vm.locations = locations.data
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
