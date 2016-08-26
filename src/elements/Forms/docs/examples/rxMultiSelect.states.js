angular.module('demoApp')
.controller('rxMultiSelectStatesCtrl', function ($scope) {
    $scope.validEnabled = 'C';
    $scope.validDisabled = '';

    $scope.invalidEnabled = 'D';
    $scope.invalidDisabled = '';

});
