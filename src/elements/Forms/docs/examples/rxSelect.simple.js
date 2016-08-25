angular.module('demoApp')
.controller('rxSelectSimpleCtrl', function ($scope) {
    $scope.radCreateDestroy = 'destroyed';

    $scope.validEnabled = 3;
    $scope.validNgDisabled = 'na';
    $scope.validDisabled = 'na';

    $scope.invalidEnabled = 4;
    $scope.invalidNgDisabled = 'na';
    $scope.invalidDisabled = 'na';

    $scope.htmlSelectAlternativeValue = 'second';
});
