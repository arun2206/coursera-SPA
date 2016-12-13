(function() {
	'use strict';

	angular.module("DIModule", [])
	.controller("DIController", DIController);

	function DIController($scope, $filter, $injector) {
		$scope.name = "Arun";

		$scope.upCase = function() {
			$scope.name = $filter('uppercase')($scope.name);
		};

		console.log($injector.annotate(DIController));
		
		console.log(DIController);
	}
})();