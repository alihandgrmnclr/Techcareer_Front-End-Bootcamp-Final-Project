var MyModule = angular.module("MyServiceModule", []);
MyModule.service("MyService", function ($http, $window, $timeout) {
    var Counter = 0;
    var Cnt = 0;
    var result = 0;
    var Total = 0;
    var Total2 = 0;
    var BasketList = [];
    var BasketPriceList = [];
    var CouponCodeList = [];

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

    // this.DoClearBasket = function () {
    //     var Basket = document.getElementById("BasketCounter");
    //     Counter = 0;
    //     Basket.innerHTML = "";
    //     // var Div = document.getElementById("Products");

    // };

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
        CouponCodeList.push(CouponCode);
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
//  -----------Zeynep's code---------




this.AddItems = function (iIndex) {
    var NumberOfItem = document.getElementById("NumberOfItem");

    iIndex = Cnt;
    Cnt++;
    OurBestRooms.Counter = Cnt;

    NumberOfItem.innerText = `${Cnt} Items`;

};


this.ChangeCounter = function (iIndex) {

    OurBestRooms[iIndex].Counter++;

    console.log(OurBestRooms[iIndex].Counter);

};

this.FindBasketPrice = function (iIndex) {
    var result = 0;
    var TotalPrice = document.getElementById('TotalPrice');

    BasketPriceList.push(OurBestRooms[iIndex].Price);

    for (var i = 0; i < BasketPriceList.length; i++) {
        if (isNaN(BasketPriceList[i])) {
            continue;
        }
        result += Number(BasketPriceList[i]);
    };

    TotalPrice.innerHTML = "$" + result;
    console.log(BasketPriceList);
    console.log(result);
    return result;
};


this.ClearBasket = function () {
    var ShoppingList = document.getElementById("ShoppingList");
    var TotalPrice = document.getElementById('TotalPrice');
    var NumberOfItem = document.getElementById("NumberOfItem");
    ShoppingList.innerHTML = "";
    TotalPrice.innerHTML = "Total 0";
    NumberOfItem.innerHTML = "0 Items";

};



this.PaymentScreenOpen = function () {
    var PaymentScreen = document.getElementById("PaymentScreen");
    PaymentScreen.className = "CheckOut CheckOut-visible";


};

this.PaymentScreenClose = function () {
    var PaymentScreen = document.getElementById("PaymentScreen");
    PaymentScreen.className = "CheckOut";
};


// -----------CheckOut--------------------

this.FindOrderSummary = function () {
    var OrderSummary = document.getElementById("OrderSummary");

    for (var i = 0; i < BasketPriceList.length; i++) {
        if (isNaN(BasketPriceList[i])) {
            continue;
        }
        result += Number(BasketPriceList[i]);
    };
    console.log(result);


    OrderSummary.innerHTML = `<small class="text-muted" >Order
    Summary</small> <p>$${result}</p>`;
   
};



this.FindDiscount = function () {
    var CouponCode = document.getElementById("CouponCode").value;
    var Discount = document.getElementById("Discount");
    
    var IsTrue = CouponCodeList.includes(CouponCode);
    if (IsTrue) {

        for (var i = 0; i < BasketPriceList.length; i++) {
            if (isNaN(BasketPriceList[i])) {
                continue;
            }
           Total += Number(BasketPriceList[i]);
          
        };
    var TotalPriceWithDiscount = Total * 0.25;
     
     Discount.innerHTML =` -$${TotalPriceWithDiscount}`;
     document.getElementById("BtnDiscountApply").remove();
     
    }
    else {
        TotalPriceWithDiscount = 0;
    };
   
    return TotalPriceWithDiscount;
};

this.FindTotalAmount = function(){
    var TotalAmount = document.getElementById("TotalAmount");

    for (var i = 0; i < BasketPriceList.length; i++) {
        if (isNaN(BasketPriceList[i])) {
            continue;
        }
        result += Number(BasketPriceList[i]);
    };
    console.log(result);


    TotalAmount.innerHTML = `<p>$${result/2}</p>`;
    

//     var TotalAmount = document.getElementById("TotalAmount");
//     var TotalPriceWithDiscount = FindDiscount()

//     for (var i = 0; i < BasketPriceList.length; i++) {
//         if (isNaN(BasketPriceList[i])) {
//             continue;
//         }
//         Total2+= Number(BasketPriceList[i]);
//     };
//   if (TotalPriceWithDiscount == undefined){
//     TotalAmount.innerHTML = `$${Total2}`
//   }
//   else{
//     TotalAmount.innerHTML = `$${Total2 -(TotalPriceWithDiscount)}`;
//   }
   
//  console.log(TotalPriceWithDiscount);

};  



this.FindTotalAmountWithDiscount = function(){
    var TotalAmount = document.getElementById("TotalAmount");
    var CouponCode = document.getElementById("CouponCode").value;
    var Discount = document.getElementById("Discount");
    
    var IsTrue = CouponCodeList.includes(CouponCode);

    for (var i = 0; i < BasketPriceList.length; i++) {
        if (isNaN(BasketPriceList[i])) {
            continue;
        }
       Total += Number(BasketPriceList[i]);
    }; 

    if (IsTrue) {

    var TotalPriceWithDiscount = Total * 0.25;
    TotalAmount.innerHTML = `$${(Total -(TotalPriceWithDiscount))/2}`
    }
    else {
        TotalPriceWithDiscount = 0;
        TotalAmount.innerHTML = `$${Total}`
    };
   
   
//     var TotalAmount = document.getElementById("TotalAmount");


//     for (var i = 0; i < BasketPriceList.length; i++) {
//         if (isNaN(BasketPriceList[i])) {
//             continue;
//         }
//         Total2+= Number(BasketPriceList[i]);
//     };
//   if (TotalPriceWithDiscount == undefined){
//     TotalAmount.innerHTML = `$${Total2}`
//   }
//   else{
//     TotalAmount.innerHTML = `$${Total2 -(TotalPriceWithDiscount)}`;
//   }
   

};


});