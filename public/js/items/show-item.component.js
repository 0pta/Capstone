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

      function onInit () {
        console.log($state);
        $http.get(`${baseUrl}/api/users/${SessionsService.user.id}/items/${$stateParams.id}`)
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
    }


})()
