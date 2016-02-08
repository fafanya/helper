mainApp.controller('enterPerformerController', function ($scope, $http) {
    $scope.login = function () {
        var l = document.getElementById("inputLogin").value;
        var p = document.getElementById("inputPassword").value;

        $http({
            method: 'GET',
            url: "http://fafanya.netau.net/ui/enter_performer_action.php?login=" + l + "&password=" + p + "&client=android"
        }).
        then(function successCallback(response) {
            document.cookie = "userid=" + response.data.userid;
            window.location = "#performer_page";
        },
        function errorCallback(response) {
            var error = response;
        });
    };
});