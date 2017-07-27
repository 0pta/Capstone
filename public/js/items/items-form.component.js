(function() {
  'use strict'

  angular.module("app")
  .component('itemsForm', {
    controller: controller,
    templateUrl: './js/items/items-form.template.html'
  })

  controller.$inject = ['API_BASE_URL', '$http','$stateParams', '$state', 'SessionsService', 'UsersService', 'itemListService']
  function controller(baseUrl, $http, $stateParams, $state, SessionsService, UsersService, itemListService) {
    const vm = this

    vm.$onInit = onInit
    vm.createItem = createItem
    vm.addImages = addImages
    vm.showItem = showItem

    function onInit() {
      console.log('component items loaded')
      vm.showingImageForm = false

      $http.get(`/api/items`)
      .then(response => {
        vm.items = response.data
      })
      .catch(err => {
        console.log(err)
      })

      $http.get(`/api/categories`)
      .then(response => {
        vm.categories = response.data
      })
      .catch(err => {
        console.log(err)
      })

      $http.get(`/api/locations`)
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
      vm.item.user_id = SessionsService.user.id
      $http.post('/api/items', vm.item)
      .then(response => {
        console.log('1stpost', response)
        showImageForm()
        vm.item_id = parseInt(response.data.replace(/\D/g, ''))
      })
    }

    function showImageForm() {
      if (!vm.showingImageForm) {
        vm.showingImageForm = true
      }
    }

    function addImages () {
      $http.get(`/api/items`)
      .then(response => {
        console.log(response);
        let returnedItem = response.data.pop()
        let imageObj = {
          item_id: returnedItem.id,
          img_url: vm.image.image_url
        }
        return $http.post('/api/images', imageObj)
        .then(response => {
          console.log('ImagePost', response.data)
          returnedItem.cover_url = imageObj.img_url
          showItem(vm.item_id)
          itemListService.items.push(returnedItem)
        })
      })

    }


  }
})()
