(function() {
	'use strict';

	angular.module("DIModule", [])
	.controller("DIController", ["$scope", "$filter", DIController]); // the below function can replace this 3rd argument directly too.

	function DIController($scope, $filter) {
		$scope.name = "Arun";

		$scope.upCase = function() {
			$scope.name = $filter('uppercase')($scope.name);
		};
	}
})();
