mainApp.controller('editBidController', function ($scope, $http)
{
    var filesForDelete = [];

    var curbidid = getCookie("curbidid");
    $http.get("http://fafanya.netau.net/ui/dbquery/bid_details_by_customer_query.php?id=" + curbidid)
    .success(function (response)
    {
        $scope.name = response.name;
        $scope.category = response.category;
        $scope.id = response.id;
        $scope.summary = response.summary;
        $scope.files = response.files;
        $scope.categories = response.categories;
        $scope.selectedcategory = response.selectedcategory;
    });

    $scope.saveBid = function (id)
    {
        var name = document.getElementById("name").value;
        var summary = document.getElementById("summary").value;
        var category_id = document.getElementById("category_id").value;
        var files = JSON.stringify(filesForDelete);
        
        var formData = new FormData();
        formData.append('files', files);
        formData.append('name', name);
        formData.append('summary', summary);
        formData.append('category_id', category_id);
        formData.append('id', id);
        formData.append('save', 0);
        formData.append('client', "android");

        $http({
            method: 'POST',
            url: "http://fafanya.netau.net/ui/edit_bid_query.php",
            data: formData,
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        }).then(function successCallback(response) {
            window.location = "#edit_bid_page";
        },
        function errorCallback(response) {
            var error = response;
        });
    };

    $scope.cancelBid = function (id)
    {
        window.location = "#customer_page";
    };

    $scope.deleteFile = function (id) {
        var intID = parseInt(id);
        filesForDelete.push(intID);
        //filesForDelete.push(id);
    };
});