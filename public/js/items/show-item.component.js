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
      vm.diff = Array.prototype.diff
      vm.getNotLocations = getNotLocations
      vm.addImage = addImage
      vm.addImageIsDisabled = false
      vm.addImageDisabler = addImageDisabler
      vm.toggleAddImageForm = toggleAddImageForm
      vm.addingImage = 'false'

      function onInit () {
        $http.get(`${baseUrl}/api/users/${SessionsService.user.id}/items/${$stateParams.id}`)
        .then(response => {
          vm.item = response.data
          vm.imgArr = response.data.img_urls
          vm.category = response.data.category
          vm.isInLocations = response.data.locations
          vm.largeImage = response.data.cover_url
          return $http.get(`${baseUrl}/api/locations`)
          .then(response => {
            vm.allLocations = response.data
            let isInIds = vm.isInLocations.map(location => location.location_id)
            let allIds = vm.allLocations.map(location => location.id)
            let isNotIds = allIds.diff(isInIds)
            console.log(isNotIds);
            vm.isNotLocations = getNotLocations(vm.allLocations, isNotIds)
            console.log('is not in these', vm.isNotLocations);
          })
        })
        .catch(err => {
          console.log(err)
        })
      }

      // returns array of locations Item is not listed in
      function getNotLocations (locations, ids) {
        let isNotLocationsArr = []
        locations.forEach((location) => {
          if (ids.indexOf(location.id) >= 0) {
            isNotLocationsArr.push(location)
          }
        })
        return isNotLocationsArr
      }

      // filters difference of 2 Arrays function
      Array.prototype.diff = function(a) {
        return this.filter(function(i) {return a.indexOf(i) < 0;})
      }

      function enlargeImage(url) {
        vm.largeImage = url
        vm.addingImage = false
      }

      function addImageDisabler () {
        if (vm.imgArr.length >= 6) {
          vm.addImageIsDisabled = true
        }
      }

      function addLocations () {
        
      }

      function toggleAddImageForm () {
        vm.addingImage = !vm.addingImage
      }

      function addImage () {
        let imageObj = {
          item_id: vm.item.id,
          img_url: vm.new_image_url
        }
        $http.post('/api/images', imageObj)
        .then(response => {
          console.log('ImagePost', response.data)
          vm.imgArr.push(response.data.img_url)
        })
      }

    }


})()
