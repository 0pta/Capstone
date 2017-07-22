(function() {
  'use strict'

  angular.module("app")
  .component('itemsForm', {
    controller: controller,
    templateUrl: './js/items/items-form.template.html'
  })

  controller.$inject = ['API_BASE_URL', '$http','$stateParams', '$state', 'SessionsService', 'UsersService']
  function controller(baseUrl, $http, $stateParams, $state, SessionsService, UsersService) {
    const vm = this

    vm.$onInit = onInit
    vm.createItem = createItem
    vm.showItem = showItem

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

    function showItem (id) {
      $state.go('showItem', {id})
    }

    function createItem () {
      $http.post('/api/items', vm.item)
      .then(response => {
        console.log('1stpost', response.data)

        // let obj = {item_id: reponse.data.id, image_url: vm.image}
        //
        // $http.post('/api/images', obj)


        vm.items.push(response.data)
        delete vm.item
      })
    }

    // function addImages () {
    //
    // }

  }

}())
