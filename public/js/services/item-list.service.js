(function() {
  angular.module('app')
    .service('itemListService', service)

  service.$inject = ['API_BASE_URL', '$http', 'SessionsService', 'UsersService']
  function service (baseUrl, $http, SessionsService, UsersService) {
    var self = this
    self.items = []
    self.refresh = function () {

      $http.get(`/api/users/${SessionsService.user.id}/items`)
      .then(response => {
        self.itemIds = response.data.map(item => item.id)
        return self.itemIds.forEach(id => {
          $http.get(`/api/users/${SessionsService.user.id}/items/${id}`)
          .then(response => {
            self.items.push(response.data)
            console.log(self.items);
          })
        })
      })
      .catch(err => {
        console.log(err)
      })
    }

  }
}())
