(function() {
	'use strict';

	angular.module("filterApp", []).controller("filterCtrl", filterCtrl);

	filterCtrl.$inject = ["$scope", "$filter"];

	function filterCtrl($scope, $filter) {
		$scope.name = "Arun";

		$scope.stateOfBeing = "hungry";

		$scope.sayMessage = function() {
			var msg = "Arun likes chocolates very much";
			$scope.name = $filter('uppercase')(msg);
		}

		$scope.feedArun = "Arun is eating chocolates";
	}
})();