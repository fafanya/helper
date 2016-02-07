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
mainApp.config(function ($routeProvider)
{
    $routeProvider
    .when('/', {
        templateUrl: '../html/main_page.html',
        controller: 'mainController'
    })
    .when('/main_page', {
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
    .when('/customer_page', {
        templateUrl: '../html/customer_page.html',
        controller: 'customerController'
    })
    .when('/performer_page', {
        templateUrl: '../html/performer_page.html',
        controller: 'performerController'
    })
    .when('/add_bid_page', {
        templateUrl: '../html/add_bid_page.html',
        controller: 'addBidController'
    })
    .when('/view_bid_page', {
        templateUrl: '../html/view_bid_page.html',
        controller: 'viewBidController'
    })
    .when('/edit_bid_page', {
        templateUrl: '../html/edit_bid_page.html',
        controller: 'editBidController'
    })
    .when('/registration_customer_page', {
        templateUrl: '../html/registration_customer_page.html',
        controller: 'registrationCustomerController'
    })
    .when('/registration_performer_page', {
        templateUrl: '../html/registration_performer_page.html',
        controller: 'registrationPerformerController'
    })
    .when('/all_bids_page', {
        templateUrl: '../html/all_bids_page.html',
        controller: 'allBidsController'
    });
});
mainApp.controller('mainController', function ($scope) {
});
mainApp.controller('enterController', function ($scope) {
});