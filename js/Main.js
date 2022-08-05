var MyApplication = angular.module("MyApplication",["MyServiceModule","MyFactoryModule"]);
MyApplication.controller("MyController", function($scope, $http, $timeout, MyService,MyFactory) {

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
        MyService.DoEventPreventer();
    };

    $scope.LoginOpen = function(){
        MyService.DoLoginOpen();
    };
    $scope.LoginClose = function(){
        MyService.DoLoginClose();
    };


    $scope.AddToBasket;
    $scope.ClearBasket;

    $scope.AddToBasket = function(){
        MyService.DoAddToBasket();
    };
    $scope.ClearBasket = function(){
        MyService.DoClearBasket();
    };


    $scope.BasketList = [];  
    $scope.AddToBasketList = function(iIndex){ 
    $scope.BasketList.push(SliderData[iIndex]); 
       console.log($scope.BasketList); 
    };

    
    $scope.PaymentScreenOpen = function(){
        MyService.DoPaymentScreenOpen();
    }
    $scope.PaymentScreenClose = function(){
        MyService.DoPaymentScreenClose();
    }

    $scope.RandomCouponCode = function(){
        MyFactory.DoRandomCouponCode();
    }

    $scope.CouponLuck = function(){
        MyService.DoCouponLuck();
    }


});