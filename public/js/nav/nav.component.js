(function() {
  'use strict'


  angular.module("app")
  .component('navigation', {
    templateUrl: './js/nav/nav.template.html',
    controller: controller
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state']
  function controller(baseUrl, $http, $state) {
    const vm = this
    vm.showAllItems = showAllItems

    function showAllItems () {
      $state.go('allItems')
    }
  }

})()
