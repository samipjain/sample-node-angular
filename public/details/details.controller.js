app.controller("detailsController",['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {
	$scope.header = 'View Details';
	$scope.id = $stateParams.id;
}]);
