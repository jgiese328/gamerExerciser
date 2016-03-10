
/* Start - exercises.html*/

angular.module('ngToggle', [])
    .controller('ImageCtrl',['$scope', function($scope){
        $scope.custom = true;
        $scope.toggleCustom = function() {
            $scope.custom = $scope.custom === false ? true: false;
        };
}]);

/* END - exercises.html*/