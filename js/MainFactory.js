var MyFactory = angular.module("MyFactoryModule", []);
MyFactory.factory("MyFactory", function ($http, $q) {

    var CouponCode = "";
    var ChanceCounter = 0;

    return {
        DoRandomCouponCode: function () {

            const Alphabet = "ABCDEFGHIJKLMNOPRSTUVWXYZ0123456789"

            for (var i = 0; i < 8; i++) {
                CouponCode += Alphabet.charAt(Math.floor(Math.random() * Alphabet.length - 1));
            }
            
            document.getElementById("CouponText").innerHTML = `${CouponCode}`;
            CouponCode = "";


        },

        


    }
});