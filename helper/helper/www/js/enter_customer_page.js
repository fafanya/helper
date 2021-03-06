﻿mainApp.controller('enterCustomerController', function ($scope, $http, $location) {
    $scope.login = function () {
        var l = document.getElementById("inputLogin").value;
        var p = document.getElementById("inputPassword").value;

        $http({
            method: 'GET',
            url: "http://fafanya.netau.net/ui/enter_customer_action.php?login=" + l + "&password=" + p + "&client=android"
        }).
        then(function successCallback(response) {
            document.cookie = "userid=" + response.data.userid;
            $location.path('/customer_page');
        },
        function errorCallback(response) {
            var error = response;
        });
    };
});