(function() {
  angular.module('app')
    .service('UsersService', service)

  service.$inject = ['API_BASE_URL', '$http']
  function service (baseUrl, $http) {
    this.create = function (user) {
      let body = { first_name: user.first_name, last_name: user.last_name, email: user.email, password: user.password }

      return $http.post(`${baseUrl}/api/users`, body)
    }

    this.show = function (id) {
      return $http.get(`${baseUrl}/api/users/${id}`)
    }
  }
}())
