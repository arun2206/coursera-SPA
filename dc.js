(function() {
	'use strict';

	angular.module("DIModule", [])
	.controller("DCController", DCController);

	function DCController($scope) {

		$scope.onceCounter = 0;
		$scope.counter = 0;
		
		$scope.showWatchersCount = function() {
			console.log($scope.$$watchersCount);
		};

		$scope.countOnce = function() {
			$scope.onceCounter = 1;
		};

		$scope.plusOnce = function() {
			$scope.counter += 1;
		};

		$scope.$watch("onceCounter", function(newval, oldVal) {
			console.log("onceCounter");
		});

		$scope.$watch("counter", function(newval, oldVal) {
			console.log("onceCounter");
		});
	}
})();