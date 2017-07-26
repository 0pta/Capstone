CLOUDINARY_CONFIG = {"api_key": "YOUR_API_KEY", "cloud_name": "YOUR_CLOUD_NAME"};
(function() {
  'use strict'

  angular.module('app', ['ui.router', 'ngclipboard', 'ui.bootstrap', 'ngAnimate'])
  .constant('API_BASE_URL', 'http://localhost:3000')

}())
