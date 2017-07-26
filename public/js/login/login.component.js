(function () {
  angular.module('app')
    .component('login', {
      templateUrl: './js/login/login.template.html',
      controller: controller
    })

  controller.$inject = ['API_BASE_URL', '$http', '$stateParams', '$state', 'SessionsService', 'UsersService']
  function controller (baseUrl, $http, $stateParams, $state, SessionsService, UsersService) {
    const vm = this

    vm.$onInit = onInit
    vm.createAcc = createAcc
    vm.backToLog = backToLog

    function onInit () {
      vm.loggingIn = true
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
          $state.go('dashboard')
        })
        .catch(function (result) {
          vm.errors.push(result.data.err)
        })
    }

    vm.openApi = function () {
      $http.get(`/api/sessions/open`)
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
      $http.get(`/api/sessions/closed`)
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

    function createAcc () {
      vm.signingUp = true
      vm.loggingIn = false
    }
    function backToLog () {
      vm.loggingIn = true
      vm.signingUp = false
    }
  }
}())
