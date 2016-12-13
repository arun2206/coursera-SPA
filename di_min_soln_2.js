(function() {
	'use strict';

	angular.module("DIModule", [])
	.controller("DIController", DIController); 

	DIController.$inject = ["$scope", "$filter"]; // Should match the order in which it is given below.

	function DIController($scope, $filter) {
		$scope.name = "Arun";

		$scope.upCase = function() {
			$scope.name = $filter('uppercase')($scope.name);
		};
	}
})();
