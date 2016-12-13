(function() {
	'use strict';

	angular.module("DIModule", [])
	.controller("InterpolationController", InterpolationController);

	function InterpolationController($scope, $filter) {
		$scope.name = "Arun";

		$scope.sayMsg = function() {
			return "Hello world";
		};

		$scope.state = "default";

		$scope.feedPet = function() {
			$scope.state = "happy";
		}
	}
})();