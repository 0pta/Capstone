(function() {
  'use strict'

  angular.module("app")
  .component('itemsForm', {
    controller: controller,
    templateUrl: './js/items/items-form.template.html'
  })

  controller.$inject = ['API_BASE_URL', '$http']
  function controller(baseUrl, $http) {
    const vm = this

    vm.$onInit = onInit
    vm.createItem = createItem

    function onInit() {
      console.log('component items loaded')

      $http.get(`${baseUrl}/api/items`)
      .then(response => {
        vm.items = response.data
      })
      .catch(err => {
        console.log(err)
      })

      $http.get(`${baseUrl}/api/categories`)
      .then(response => {
        vm.categories = response.data
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
    }

    function createItem() {
      $http.post('/api/items', vm.item)
      .then(response => {
        vm.items.push(response.data)
        vm.toggleItemForm()
        delete vm.item
      })
    }

  }

}())
