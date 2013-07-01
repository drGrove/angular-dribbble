'use strict';

var filters = angular.module('dabbble.filters', []);

filters.filter('dabbbleDate', function($filter){
    return function (value, format) {
        if(value) {
            value = Date.parse(value)
        }
        return $filter('date')(value, format)
    }
});
