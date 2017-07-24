(function() {
  angular.module('app')
    .service('SessionsService', service)

  service.$inject = ['API_BASE_URL', '$http']
  function service (baseUrl, $http) {
    var sessionService = this
    sessionService.user = {}

    sessionService.refresh = function () {
      return $http.get(`${baseUrl}/api/sessions/refresh`).then(function (result) {
        var response = result.data
        response ? Object.assign(sessionService.user, response.user) : Object.assign(sessionService.user, {})
      })
    }

    sessionService.login = function (user) {
      let body = { first_name: user.first_name, last_name: user.last_name, email: user.email, password: user.password }

      return $http.post(`${baseUrl}/api/sessions`, body)
        .then((result) => {
          sessionService.user = result.data.user
          return sessionService.user
        })
    }

    sessionService.logout = function () {
      sessionService.user = {}

      return $http.delete(`${baseUrl}/api/sessions`)
    }
  }
}());
