var app = angular.module("nvd3TestApp", ['nvd3ChartDirectives']);

app.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);

app.factory('openWeatherService', ['$http', function($http){
    var getBallots = function(){
        return $http({
            method: 'JSONP',
            url:'http://www12241ue.sakura.ne.jp:4567/ballots.json?callback=JSON_CALLBACK'
        });
    }
    return{
        getVote: function(){return getBallots();}
    }
}]);

function ExampleCtrl($scope, $window, openWeatherService, $timeout) {
    $scope.exampleData = [{
        key: "One", y: 1
    }, {
        key: "Two", y: 1
    },];

    $scope.height = 500;

    $scope.$watch(function() {
        return $window.innerHeight;
    }, function(value) {
        $scope.height = value;
        console.log($scope.height);
    });

    function fetchData(){
        openWeatherService.getVote()
            .success(function(response){
                console.log("success.");
                $scope.exampleData = response;
            });
    }
    fetchData();

    $scope.intervalFunction = function(){
        $timeout(function() {
            fetchData();
            $scope.intervalFunction();
        }, 2500)
    };
    $scope.intervalFunction();

    $scope.xFunction = function() {
        return function(d) {
            return d.key;
        };
    }
    $scope.yFunction = function() {
        return function(d) {
            return d.y;
        };
    }

    $scope.colorFunction = function() {
        return function(d) {
            return d.data.color;
        }
    }

    $scope.widthFunction = function() {
        return 500;
    }

    $scope.heightFunction = function() {
        return 500;
    }
}
