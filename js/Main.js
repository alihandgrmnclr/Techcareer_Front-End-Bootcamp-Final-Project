var MyApplication = angular.module("MyApplication",["MyModule"]);
MyApplication.controller("MyController", function($scope, $http, $timeout, MyService) {

    $scope.BannerData = [];
    $scope.BannerDataLower = [];
    $scope.RecentEventsData = [];
    $scope.Reviews = [];
    $scope.OurBlog = [];
    $scope.OurStaff = [];
    $scope.OurBestRooms = [];
    $scope.Facilities = [];
    $scope.Welcome = [];
    $scope.OurFacilities = [];

    $scope.SetData = function(){
        $scope.BannerData = BannerData;
        $scope.BannerDataLower = BannerDataLower;
        $scope.RecentEventsData = RecentEventsData;
        $scope.Reviews = Reviews;
        $scope.OurBlog = OurBlog;
        $scope.OurStaff = OurStaff;
        $scope.OurBestRooms = OurBestRooms;
        $scope.Facilities = Facilities;
        $scope.Welcome = Welcome;
        $scope.OurFacilities = OurFacilities;
    };
    
    $scope.EventPreventer;

    $scope.EventPreventer = function(){
        MyService.EventPreventer();
    };

    $scope.LoginOpen = function(){
        MyService.LoginOpen();
    };
    $scope.LoginClose = function(){
        MyService.LoginClose();
    };


    $scope.AddToBasket;
    $scope.ClearBasket;

    $scope.AddToBasket = function(){
        MyService.AddToBasket();
    };
    $scope.ClearBasket = function(){
        MyService.ClearBasket();
    };


    $scope.BasketList = [];  
    $scope.AddToBasketList = function(iIndex){ 
    $scope.BasketList.push(SliderData[iIndex]); 
       console.log($scope.BasketList); 
    };

    
    $scope.PaymentScreenOpen = function(){
        MyService.PaymentScreenOpen();
    }
    $scope.PaymentScreenClose = function(){
        MyService.PaymentScreenClose();
    }

    $scope.RandomCouponCode = function(){
        MyService.RandomCouponCode();
    }


});