'use strict';

/**
 * @ngdoc function
 * @name initernalsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the initernalsApp
 */
angular.module('initernalsApp')
  .controller('MainCtrl', function ($scope, $sce, Memory) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    Memory.sendMessage('render', 'main', 'raw', function(response){
      console.log(response)
    })

    $scope.changePrefix = function(){
      var url = "https://www.google.com/calendar/embed?src=" + this.prefix + "%40theinitium.com&ctz=Asia/Hong_Kong"
      Memory.sendMessage('prefix', this.prefix)
      $scope.url = $sce.trustAsResourceUrl(url)
    }

  });
