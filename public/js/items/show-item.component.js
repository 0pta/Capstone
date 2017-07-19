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
          vm.item = response.data
          vm.imgArr = response.data.img_urls
          vm.locations = response.data.locations
          console.log(vm.item);
        })
        .catch(err => {
          console.log(err)
        })
      }

      function carouselSwitch (i) {

      }
    }


})()
