angular.module('angularStarterApp.services', [])

// service for showing and hiding the ajax loader
.factory('LoadingService', function($uibModal){
    var loadingModal = "";
	return {
		showLoading : function(){
			loadingModal = $uibModal.open({
                animation: true,
                template: '<div class="panel panel-primary" style="margin:0px;"><div class="panel-body text-center">Loading...<uib-progressbar class="progress-striped active" animate="true" value="100" style="margin:25px 0px;"></uib-progressbar></div></div>',
                size: 'sm',
                backdrop: 'static'
            });
		},
		hideLoading: function(){
			loadingModal.close();
		}
	}
})

.factory('UserService', function($http, $timeout) {
	var users = [];

	return {
		getUsers: function(){
            return $http({
                method: "GET",
                url: api_url,
                /*data: $.param({
                    param: value,
                }),
                headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
                */
            })
            .success(function(res, status, headers, config) {
                users = res;
                return users;
            })
            .error(function(res, status, headers, config) {
                return res;
            });
		}
	}
})