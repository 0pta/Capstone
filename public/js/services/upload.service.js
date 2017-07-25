(function() {
  angular.module('app')
  .service('fileUpload', service)

  service.$inject = ['API_BASE_URL', '$http', 'SessionsService', 'UsersService']
  function service (baseUrl, $http, SessionsService, UsersService) {
    const vm = this
    vm.uploadFileToUrl = uploadFileToUrl

    function uploadFileToUrl (file, uploadUrl){
      var fd = new FormData();
      fd.append('file', file);
      $http.post(uploadUrl, fd, {
        transformRequest: angular.identity,
        headers: {'Content-Type': undefined}
      })
      .success(function(){
      })
      .error(function(){
      });
    }
  }]);


}

}
}())
