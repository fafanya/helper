mainApp.controller('performerController', function ($scope, $http)
{
    var userid = getCookie("userid");
    $http({
        method: 'GET',
        url: "http://fafanya.netau.net/ui/dbquery/bid_link_list_by_performer_query.php?userid=" + userid + "&client=android"
    }).then(function successCallback(response) {
        $scope.links = response.data.links;
    },
    function errorCallback(response) {
        var error = response;
    });

    $scope.deleteBid = function (id) {
        $http.get("http://fafanya.netau.net/ui/performer_his_bids_action.php?id=" + id + "&client=android&delete=0")
        .success(function (response) {
            window.location = "#performer_page";
        });
    };
});