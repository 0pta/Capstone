// CLOUDINARY_URL=cloudinary://714654525486879:LGLySoqLysn8QR632dEoMkw-TvE@dnqlnjcaf
(function() {
  angular.module('app')
  .service('uploadService', service)

  service.$inject = ['API_BASE_URL', '$http', 'SessionsService', 'UsersService', '$q']
  function service (baseUrl, $http, SessionsService, UsersService, $q) {
    const vm = this
    vm.upload = upload
    vm.handleError = handleError
    vm.handleSuccess = handleSuccess

    return ({
      upload: upload
    });


    function upload(file) {
      console.log(file);
      

      let upl = $http({
        method: 'POST',
        url: 'http://jsonplaceholder.typicode.com/posts',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        data: {
          upload: file
        },
        transformRequest: function(data, headersGetter) {
          let formData = new FormData();
          angular.forEach(data, function(value, key) {
            formData.append(key, value);
          });

          let headers = headersGetter();
          delete headers['Content-Type'];

          return formData;
        }
      });
      return upl.then(vm.handleSuccess, vm.handleError)

    }

    function handleError(response, data) {
      if (!angular.isObject(response.data) ||!response.data.message) {
        return ($q.reject("An unknown error occurred."));
      }

      return ($q.reject(response.data.message));
    }

    function handleSuccess(response) {
      return (response);
    }

  }

}())
