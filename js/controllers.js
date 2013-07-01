'use strict';

var ctrls = angular.module('dabbble.controllers', []);

ctrls.controller('AppCtrl', function($scope, $http) {
});

ctrls.controller('ShotsListCtrl', function($scope, dribbble, $routeParams) {
    var list = $routeParams.list;
    dribbble.list(list).then(function (data){
        console.log(data)
        $scope.list = data.data;
    })

    $scope.loadNexPage = function(){
        dribbble.list(list, {page: parseInt($scope.list.page) + 1}).then(function(data) {
            console.log(data);
            $scope.list.page = data.data.page;
            $scope.list.shots = $scope.list.shots.concat(data.data.shots)
        });
    }
});

ctrls.controller('ShotsCtrl', function($scope, dribbble, $routeParams) {
    var id = $routeParams.id;
    dribbble.shot(id).then(function (data){
        $scope.shot = data.data;
        console.log(data);
    });
});
