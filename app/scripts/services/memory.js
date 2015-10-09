'use strict';

/**
 * @ngdoc service
 * @name initernalsApp.Memory
 * @description
 * # Memory
 * Service in the initernalsApp.
 */
angular.module('initernalsApp')
  .service('Memory', function ($localStorage, $http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var prefix = 'http://s.init.im:8081/'
    var urlRemember = prefix + 'remember/initernals/'
    var urlUUID = prefix + 'utility/uuid/'
    var memory = {
      requestUUID: function(callback){
        $http.get(urlUUID).then(function(response){
          $localStorage.uuid = response.data.data.uuid
          callback(response)
        }, function(response){
          console.log('Error:')
          console.log(response)
        })
      },
      sendMessage: function(key, value, raw, callback){
        var sendMessageFunction = function(){
          $http.post(urlRemember, {
            username: $localStorage.uuid,
            key: key,
            value: value,
            raw: raw
          }).then(function(response){
            if (callback) {
              callback(response)
            }
          })
        }
        if ($localStorage.uuid) {
          sendMessageFunction()
        } else {
          memory.requestUUID(sendMessageFunction)
        }
      }

    }
    return memory
  });
