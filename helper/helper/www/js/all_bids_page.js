mainApp.controller('allBidsController', function ($scope, $http)
{
    $http.get("http://fafanya.netau.net/ui/dbquery/all_bid_list_query.php")
    .success(function (response)
    {
        $scope.names = response.records;
    });

    $scope.addBid = function (id)
    {
        var userid = getCookie("userid");
        $http.get("http://fafanya.netau.net/ui/performer_all_bids_action.php?id=" + id + "&client=android&add=0&userid="+userid)
        .success(function (response)
        {
            window.location = "#performer_page";
        });
    };
});