mainApp.controller('customerController', function ($scope, $http)
{
    var userid = getCookie("userid");
    $http({
        method: 'GET',
        url: "http://fafanya.netau.net/ui/dbquery/bid_list_by_customer_query.php?userid=" + userid + "&client=android"
    }).then(function successCallback(response) {
        $scope.names = response.data.records;
    },
    function errorCallback(response) {
        var error = response;
    });

    $scope.deleteBid = function (id) {
        $http.get("http://fafanya.netau.net/ui/delete_bid_action.php?id=" + id + "&client=android")
        .success(function (response) {
            window.location = "#customer_page";
        });
    };

    $scope.viewBid = function (id) 
    {
        document.cookie = "curbidid=" + id;
        window.location = "#view_bid_page";
    };

    $scope.editBid = function (id) 
    {
        document.cookie = "curbidid=" + id;
        window.location = "#edit_bid_page";
    };
});