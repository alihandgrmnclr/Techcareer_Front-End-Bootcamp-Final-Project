var MyModule = angular.module("MyModule", []);
MyModule.service("MyService", function ($http, $window, $timeout) {

    this.LoginOpen = function () {
        let Div = document.getElementById("LoginDv");
        Div.className = "LoginDv LoginDv-visible";

    };

    this.LoginClose = function () {
        let Div = document.getElementById("LoginDv");
        Div.className = "LoginDv";
    };

    var Counter=0;
    this.AddToBasket = function () {
        
        var Basket = document.getElementById("BasketCounter");
        Counter++;
        Basket.innerHTML = Counter;
        var Product = document.getElementById("Products");
        // Product = document.createElement("div");
        // Product.innerHTML = `<img style="height: 100px; width: 100px;" src="{{Room.ImgUrl}}" ng-repeat="Room in OurBestRooms | limitTo:1"></img>`;
        
    };

    this.ClearBasket = function () {
        var Basket = document.getElementById("BasketCounter");
        Counter = 0;
        Basket.innerHTML = "";
        // var Div = document.getElementById("Products");
        
    };

    this.PaymentScreenOpen = function(){
        var PaymentScreen = document.getElementById("PaymentScreen");
        PaymentScreen.className = "CheckOut CheckOut-visible";
        

    };

    this.PaymentScreenClose = function(){
        var PaymentScreen = document.getElementById("PaymentScreen");
        PaymentScreen.className = "CheckOut";
    };

    this.RoomPanelOpen = function(){
        var RoomPanel = document.getElementById("RoomPanel");
        RoomPanel.className = "RoomPanel RoomPanel-visible";
    };

    this.RoomPanelClose = function(){
        var RoomPanel = document.getElementById("RoomPanel");
        RoomPanel.className = "RoomPanel";
    };

    var CouponCode="";
    this.RandomCouponCode = function(){
        const Alphabet = "ABCDEFGHIJKLMNOPRSTUVWXYZ0123456789"
        
        for (var i = 0; i < 8; i++) {
            CouponCode += Alphabet.charAt(Math.floor(Math.random() * Alphabet.length));
        }
            console.log(CouponCode);
            CouponCode="";
    };


    this.EventPreventer = function () {
        event.preventDefault();
    };



});