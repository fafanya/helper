mainApp.controller('viewBidController', function ($scope, $http)
{
    var curbidid = getCookie("curbidid");
    $http.get("http://fafanya.netau.net/ui/dbquery/bid_details_by_customer_query.php?id=" + curbidid)
    .success(function (response)
    {
        $scope.name = response.name;
        $scope.category = response.category;
        $scope.id = response.id;
        $scope.files = response.files;
        $scope.summary = response.summary;
        $scope.categories = response.categories;
        $scope.selectedcategory = response.selectedcategory;
        $scope.comments = response.comments;
    });

    $scope.saveBid = function (id) {
        var name = document.getElementById("name").value;
        var summary = document.getElementById("summary").value;
        var category_id = document.getElementById("category_id").value;

        $http.get("http://fafanya.netau.net/ui/edit_bid_query.php?client=android&save=0&id="
            + id + "&name=" + name + "&summary=" + summary + "&category_id=" + category_id)
        .success(function (response) {
            document.cookie = "curbidid=" + id;
            window.location = "#view_bid_page";
        });
    };

    $scope.cancelBid = function (id) {
        window.location = "#customer_page";
    };

    $scope.addComment = function (id)
    {
        var comment = document.getElementById("comment").value;
        var userid = getCookie("userid");
        $http.get("http://fafanya.netau.net/ui/dbquery/add_comment_query.php?client=android&save=0&id="
            + id  + "&summary=" + comment + "&userid=" + userid)
        .success(function (response)
        {
            window.location = "#view_bid_page";
        });
    }
});