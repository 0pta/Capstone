(function() {
  'use strict'

  angular.module('app')
    .component('showItem', {
      templateUrl: './js/items/show-item.template.html',
      controller: controller
    })

    controller.$inject = ['API_BASE_URL', '$http','$stateParams', '$state', 'SessionsService', 'UsersService']
    function controller(baseUrl, $http, $stateParams, $state, SessionsService, UsersService) {
      const vm = this
      vm.$onInit = onInit
      vm.enlargeImage = enlargeImage

      function onInit () {
        $http.get(`${baseUrl}/api/users/${SessionsService.user.id}/items/${$stateParams.id}`)
        .then(response => {
          vm.item = response.data
          vm.imgArr = response.data.img_urls
          vm.category = response.data.category
          vm.isInlocations = response.data.locations
          vm.largeImage = response.data.cover_url
          console.log(vm.item);
          return $http.get(`${baseUrl}/api/locations`)
          .then(response => {
            vm.isNotlocations = response.data
          })
        })
        .catch(err => {
          console.log(err)
        })

      }

      function enlargeImage (img_url) {
        vm.largeImage = img_url
      }

      function addLocations () {

      }
    }


})()
