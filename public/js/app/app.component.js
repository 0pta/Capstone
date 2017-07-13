(function() {
  'use strict'

  angular.module('app')
    .component('app', {
      controller: controller,
      templateUrl: '/js/app/app.template.html'
    })

    controller.$inject = ['API_BASE_URL', '$http', '$state']
    function controller(baseUrl, $http, $state) {
      const vm = this

      vm.$onInit = $onInit

      function $onInit () {
        console.log('HEYO')
      }
    }


}())
