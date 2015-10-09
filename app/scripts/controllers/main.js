'use strict';

/**
 * @ngdoc function
 * @name initernalsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the initernalsApp
 */
angular.module('initernalsApp')
  .controller('MainCtrl', function ($scope, $sce) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  $scope.changePrefix = function(){
  	  var url = "https://www.google.com/calendar/embed?src=" + this.prefix + "%40theinitium.com&ctz=Asia/Hong_Kong"
  	  $scope.url = $sce.trustAsResourceUrl(url)
  }

  });
