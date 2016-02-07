mainApp.controller('registrationCustomerController', function ($scope, $http) {
    $scope.signUp = function () {
        var l = document.getElementById("inputLogin").value;
        var p = document.getElementById("inputPassword").value;
        var e = document.getElementById("inputEmail").value;

        $http.get("http://fafanya.netau.net/ui/dbquery/add_customer_query.php?login=" + l + "&password=" + p + "&email=" + e + "&client=android")
        .success(function (response) {
            window.location = "#";
        });

    };
});