(function() {
  'use strict'

  angular.module("app")
  .component('items', {
    controller: controller,
    templateUrl: './js/items/items.template.html'
  })

  controller.$inject = ['API_BASE_URL', '$http']
  function controller(baseUrl, $http) {
    const vm = this

    vm.$onInit = onInit
    vm.toggleItemForm = toggleItemForm
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
    }

    function toggleItemForm() {
      vm.addingItem = !vm.addingItem
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
