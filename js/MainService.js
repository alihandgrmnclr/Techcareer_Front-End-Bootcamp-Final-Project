var MyModule = angular.module("MyServiceModule", []);
MyModule.service("MyService", function ($http, $window, $timeout) {

    this.DoLoginOpen = function () {
        let Div = document.getElementById("LoginDv");
        Div.className = "LoginDv LoginDv-visible";

    };

    this.DoLoginClose = function () {
        let Div = document.getElementById("LoginDv");
        Div.className = "LoginDv";
    };

    var Counter = 0;
    this.DoAddToBasket = function () {

        var Basket = document.getElementById("BasketCounter");
        Counter++;
        Basket.innerHTML = Counter;
        var Product = document.getElementById("Products");
        // Product = document.createElement("div");
        // Product.innerHTML = `<img style="height: 100px; width: 100px;" src="{{Room.ImgUrl}}" ng-repeat="Room in OurBestRooms | limitTo:1"></img>`;

    };

    this.DoClearBasket = function () {
        var Basket = document.getElementById("BasketCounter");
        Counter = 0;
        Basket.innerHTML = "";
        // var Div = document.getElementById("Products");

    };

    this.DoPaymentScreenOpen = function () {
        var PaymentScreen = document.getElementById("PaymentScreen");
        PaymentScreen.className = "CheckOut CheckOut-visible";


    };

    this.DoPaymentScreenClose = function () {
        var PaymentScreen = document.getElementById("PaymentScreen");
        PaymentScreen.className = "CheckOut";
    };

    var CouponCode="";
    this.DoRandomCouponCode = function () {

        const Alphabet = "ABCDEFGHIJKLMNOPRSTUVWXYZ0123456789"

        for (var i = 0; i < 8; i++) {
            CouponCode += Alphabet.charAt(Math.floor(Math.random() * Alphabet.length - 1));
        }
        
        document.getElementById("CouponText").innerHTML = `${CouponCode}`;
        CouponCode = "";
    }
    
    this.DoCouponLuck = function () {
        const Luck = "123456";
        var chance = (Luck.charAt(Math.random() * Luck.length - 1));

            document.getElementById("dice").innerHTML = chance;

            var Btn = document.getElementById("DiceButton");
            var DiceNo = document.getElementById("dice");
            if (chance == 5){
                this.DoRandomCouponCode();
                Btn.remove();
                DiceNo.innerHTML=`Congratulations! <br>`;
            }

        console.log(chance);

    }


    this.DoEventPreventer = function () {
        event.preventDefault();
    };



});