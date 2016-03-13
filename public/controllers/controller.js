function AppCtrl($scope, $http) {
	console.log('angular ctrl');

	var refresh = function() {
		$http.get('/contactlist')
			.success(function(res) {
				console.log('i got the data');
				$scope.contactlist = res;
				$scope.contact = "";
			});
	};

	refresh();

	$scope.addContact = function() {
		console.log($scope.contact);
		$http.post('/contactlist', $scope.contact)
			.success(function(res) {
				console.log(res);
				refresh();
			});
	};


	$scope.removeContact = function(item) {
		console.log(item._id);
		$http.delete('/contactlist/' + item._id)
			.success(function(res) {
				refresh();
			});
	};


	$scope.editContact = function(item) {
		console.log(item._id);
		$http.get('/contactlist/' + item._id)
			.success(function(res) {
				$scope.contact = res;
			});
	};


	$scope.updateContact = function() {
		console.log($scope.contact._id);
		$http.put('/contactlist/' + $scope.contact._id, $scope.contact)
		.success(function(res) {
			refresh();
		});
	};


}