function getCookie(cname)
{
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

var mainApp = angular.module('mainApp', ['ngRoute']);
mainApp.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: '../html/main_page.html',
        controller: 'mainController'
    })
    .when('/enter_as', {
        templateUrl: '../html/enter_page.html',
        controller: 'enterController'
    })
    .when('/enter_as_customer', {
        templateUrl: '../html/enter_customer_page.html',
        controller: 'enterCustomerController'
    })
    .when('/enter_as_performer', {
        templateUrl: '../html/enter_performer_page.html',
        controller: 'enterPerformerController'
    })
    .when('/customer_page',{
        templateUrl: '../html/customer_page.html',
        controller: 'customerController'
    });
});
mainApp.controller('mainController', function ($scope) {
});
mainApp.controller('enterController', function ($scope) {
});
mainApp.controller('enterPerformerController', function ($scope) {
});
mainApp.controller('customerController', function ($scope, $http)
{
    var userid = getCookie("userid");
    var t = 1 + 1;
    $http({
        method: 'GET',
        url: "http://fafanya.netau.net/ui/dbquery/bid_list_by_customer_query.php?userid=" + userid + "&client=android"
    }).then(function successCallback(response)
    {
        $scope.names = response.data.records;
    },
    function errorCallback(response)
    {
        var error = response;
    });

    $scope.deleteBid = function (id) {
        $http.get("http://fafanya.netau.net/ui/delete_bid_action.php?id=" + id + "&client=android")
        .success(function (response) {
            window.location = "../html/customer_page.html";
        });
    };

    $scope.viewBid = function (id) {
        document.cookie = "curbidid=" + id;
        window.location = "../html/view_bid_page.html";
    };

    $scope.editBid = function (id) {
        document.cookie = "curbidid=" + id;
        window.location = "../html/edit_bid_page.html";
    };
});