(function () {
  angular.module('app')
    .component('login', {
      templateUrl: './js/login/login.template.html',
      controller: controller
    })

  controller.$inject = ['API_BASE_URL', '$http', '$stateParams', 'SessionsService', 'UsersService']
  function controller (baseUrl, $http, $stateParams, SessionsService, UsersService) {
    const vm = this

    vm.$onInit = onInit

    function onInit () {
      console.log('Login Component Loaded');
    }

    vm.reset = function () {
      vm.response = vm.notification = ''
      vm.errors = []
      vm.loginOpts = {}
      vm.signupOpts = {}
    }

    vm.reset()
    vm.notification = $stateParams.notification || ''
    vm.session = SessionsService

    vm.signup = function (user) {
      UsersService.create(user)
      .then(function () {
        return SessionsService.login(user)
      })
      .then(function () {
        vm.reset()
        vm.response = 'You successfully created an account and are logged in!'
      })
      .catch(function (result) {
        vm.errors.push(result.data.err)
      })
    }

    vm.login = function (user) {
      SessionsService.login(user)
        .then(function () {
          vm.reset()
          vm.response = 'You successfully logged in!'
        })
        .catch(function (result) {
          vm.errors.push(result.data.err)
        })
    }

    vm.openApi = function () {
      $http.get(`${baseUrl}/api/sessions/open`)
        .then(function (result) {
          console.log('Your message:', result.data)
          vm.reset()
          vm.response = 'Unsecured request made successfully.'
        })
        .catch(function (result) {
          console.log('Your message:', result.data)
          vm.errors.push('Something went wrong. Check your application setup.')
        })
    }

    vm.closedApi = function () {
      $http.get(`${baseUrl}/api/sessions/closed`)
      .then(function (result) {
        console.log('Your message:', result.data)
        vm.reset()
        vm.response = 'Secure request made successfully.'
      })
      .catch(function (result) {
        console.log('Your message:', result.data)
        vm.errors.push('Something went wrong. You are likely not logged in!')
      })
    }

    vm.logout = function () {
      SessionsService.logout().then(function () {
        vm.reset()
        vm.response = 'You successfully logged out.'
      })
    }
  }
}())
