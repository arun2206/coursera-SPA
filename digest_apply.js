(function() {
	'use strict';

	angular.module("DIModule", [])
	.controller("DAController", DAController);

	function DAController($scope, $timeout) {
		$scope.counter1 = 0;
		// $scope.counter2 = 0;

		// $scope.incCounter1 = function() {
		// 	$scope.counter1 += 1;
		// };

		$scope.incCounter2 = function() {
			setTimeout(function() {
				console.log("counter2 inc");
				$scope.counter2++;
			}, 2000);
		};	

		$scope.upCounter = function() {
			$timeout(function() {
				$scope.counter1++;
				console.log("counter");
			}, 2000);
		}	

		// $scope.upCounter = function() {
		// 	setTimeout(function() {
		// 		$scope.$apply(function() {
		// 			$scope.counter1++;
		// 			console.log("counter");
		// 		});
		// 	}, 2000);
		// }


	}
})();