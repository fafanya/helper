mainApp.controller('addBidController', function ($scope, $http)
{
    $http.get("http://fafanya.netau.net/ui/dbquery/category_list_query.php")
    .success(function (response)
    {
        $scope.categories = response.categories;
    });

    $scope.add = function ()
    {
        var userid = getCookie("userid");
        var name = document.getElementById("name").value;
        var summary = document.getElementById("summary").value;
        var category_id = document.getElementById("category_id").value;
        var file = document.getElementById('file').files[0];

        var formData = new FormData();
        formData.append('uploaded_file', file);
        formData.append('name', name);
        formData.append('summary', summary);
        formData.append('category_id', category_id);
        formData.append('client', 'android');
        formData.append('userid', userid);
        
        $http({
            method: 'POST',
            url: "http://fafanya.netau.net/ui/add_bid_query.php",
            data: formData,
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        }).then(function successCallback(response) {
            window.location = "#customer_page";
        },
        function errorCallback(response) {
            var error = response;
        });
    };
});