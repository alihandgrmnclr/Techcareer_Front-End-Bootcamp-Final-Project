var MyFactory = angular.module("MyFactoryModule", []);
MyFactory.factory("MyFactory", function ($http, $q) {

    var CouponCode = "";

    return {
        DoRandomCouponCode: function () {

            const Alphabet = "ABCDEFGHIJKLMNOPRSTUVWXYZ0123456789"

            for (var i = 0; i < 8; i++) {
                CouponCode += Alphabet.charAt(Math.floor(Math.random() * Alphabet.length-1));
            }
            console.log(CouponCode);
            document.getElementById("CouponText").innerHTML = `${CouponCode}`;
            CouponCode = "";
            
        },

        DoCouponLuck: function () {
            const Luck = "1234567890";
            var chance = (Luck.charAt(Math.random() * Luck.length-1));
            console.log(chance);

            if (chance == 5){
                this.DoRandomCouponCode();
            }
        },


    }
});