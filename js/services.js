'use strict';

var services = angular.module('dabbble.services', []);

services.factory('dribbble', function($http){
    function load(path, params) {
        params = params || {};
        params.callback = "JSON_CALLBACK"
        return $http.jsonp('http://api.dribbble.com' + path , {params: params})
    }

    return {
        list: function(type, params) {
            return load("/shots/" + type, params);
        },
        shot: function (id) {
            return load("/shots/" + id);
        }
    }
});
