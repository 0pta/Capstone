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
        console.log('HEYO')
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
      }
    }

}())
