(function() {
  'use strict'

  angular.module('app')
    .component('showItem', {
      templateUrl: './js/items/show-item.template.html',
      controller: controller
    })

    controller.$inject = ['API_BASE_URL', '$http','$stateParams', '$state']
    function controller(baseUrl, $http, $stateParams, $state) {
      const vm = this
      vm.$onInit = onInit
      
      function onInit () {
        $http.get(`${baseUrl}/api/items/${$stateParams.id}`)
        .then(response => {
          console.log(response.data);
          vm.item = response.data
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
    }


})()
