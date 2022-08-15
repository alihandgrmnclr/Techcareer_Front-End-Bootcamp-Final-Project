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
        let loginregisterButton = document.getElementById("loginregisterbutton");
        let Div = document.getElementById("LoginDv");
        
        if(loginregisterButton.textContent == "Login/Register"){
            Div.className = "LoginDv LoginDv-visible";
        }
        else{
            return;
        }


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

// <!--- Mustafa --- !> //

this.MyAccountPageOpen = function(){
    var MyAccountPage = document.getElementById("MyAccountPage");
    MyAccountPage.className="MyAccountPage MyAccountPage-visible";
}
this.MyAccountPageClose = function(){
    var MyAccountPage = document.getElementById("MyAccountPage");
    MyAccountPage.className="MyAccountPage";
   
}
this.DoShowMyAccountPage = function(){
    var loginRegisterButton = document.getElementById("loginregisterbutton");
    if(loginRegisterButton.textContent==checkUsername){
        var MyAccountPage = document.getElementById("MyAccountPage");
        MyAccountPage.className="MyAccountPage MyAccountPage-visible";
    }
    else{
        return;
    }
}

this.DoCheckFormRegister = function(){
        
    var nameValue = document.getElementById("registerName").value;
    var emailValue = document.getElementById("registerEmail").value;
    var usernameValue = document.getElementById("registerUsername").value;
    var passwordValue = document.getElementById("registerPassword").value;
   
    registerName = nameValue;
   registerEmail = emailValue;
    registerUsername = usernameValue;
    registerPassword = passwordValue;

   
    if(nameValue!=="" && emailValue !=="" && passwordValue!=="" && usernameValue!==""){
       
   

    const Toast = Swal.mixin({
       toast: true,
       position: 'top-end',
       showConfirmButton: false,
      timer: 4000,
        timerProgressBar: true,
       didOpen: (toast) => {
         toast.addEventListener('mouseenter', Swal.stopTimer)
         toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
     })
         
     Toast.fire({
       icon: 'success',
       title: 'Register is successfully'
     })

       return registerName,registerEmail,registerUsername,registerPassword;
       
       
       
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Stop..',
            text: 'Name or Email or password cannot be empty'
          })
    }
}

this.DoCheckLogin = function(){
   var loginUsername = document.getElementById("loginUsername").value;
   var loginPassword = document.getElementById("loginPassword").value;
   var MyAccountPage = document.getElementById("MyAccountPage");
   var LoginDiv = document.getElementById("LoginDv");
   var loginregisterButton = document.getElementById("loginregisterbutton");
   var accountPageTitle = document.getElementById("accountPageTitle");
   var accountPageText = document.getElementById("accountPageText");
   
   

   if(registerUsername == loginUsername && registerPassword == loginPassword){
       
       Swal.fire({
           icon: 'success',
           title: 'Great !',
           text: "Hey Welcome You have logged in successfuly" 
         })

       let showMyAccountPage = () =>{
           MyAccountPage.className="MyAccountPage MyAccountPage-visible";
           LoginDiv.className = "LoginDv";
       }
       setTimeout(showMyAccountPage,2000);
       
        
       loginregisterButton.innerHTML=
       `
       <i style="margin-right: 2px;" class="fa fa-user"></i>
       <b> ${loginUsername}</b>
       `
       loginregisterButton.addEventListener("click",function(){
        MyAccountPage.className="MyAccountPage MyAccountPage-visible";   
       })
       
       accountPageTitle.innerHTML = `Welcome to Your Page Mr. ${loginUsername}`;
       accountPageText.textContent = "You can make any changes you want on this page."
       
   }
   else{
       Swal.fire({
           icon: 'error',
           title: 'Stop..',
           text: "Username or password incorrect!"
         })
   }
   oldPassword = loginPassword;
   
   chekUsername = loginUsername;
   return checkPassword,checkUsername;
     
}
this.DoShowUserInformations = function(){
   var UserInformations = document.getElementById("accountInformations");
   UserInformations.innerHTML ="";
   UserInformations.innerHTML = `
   
   <table class="table table-primary">
   <thead>
     <tr>
       <th scope="col">ID</th>
       <th scope="col">NAME</th>
       <th scope="col">USERNAME</th>
       <th scope="col">MAIL ADRESS</th>
     </tr>
   </thead>
   <tbody>
     <tr>
       <th scope="row">1</th>
       <td>${registerName}</td>
       <td>${registerUsername}</td>
       <td>${registerEmail}</td>
     </tr>
     
     </tbody>
     </table>
     
   `;
}
this.DoChangeUserPassword = function(){
   var UserInformationsPas = document.getElementById("accountInformations");
   UserInformationsPas.innerHTML ="";
   UserInformationsPas.innerHTML = `
   <div class="accountInformations animate__animated animate__fadeIn ">
   <p style="font-size:20px; margin-top:15px;" class="text-center fw-bold">Reset Password</p> <br>
   <div id="inputs">
   <label>Old Password :</label>
   <input style="margin-bottom: 20px; padding:5px; border-radius:5px;" id="oldpassword" type="password" placeholder="Old Password.."><br>
   <label>New Password :</label>
   <input style="margin-bottom: 20px; padding:5px; border-radius:5px;" id="newpassword" type="password" placeholder="New Password.."><br>
   <button style="margin-left:60px; margin-bottom:20px" class="btn btn-primary" ng-click="ChangeOldPassword(); " id="resetPassword" type="button">Reset Password</button>
   </div>
   `;
                
}
// <!------------ DEVAM EDİLECEK ----------- !> 


this.DoChangeOldPassword = function(){
     console.log("selam");
    
}
this.DoChangeMailAdress = function(){
   var UserInformationsMail = document.getElementById("accountInformations");
   UserInformationsMail.innerHTML ="";
   UserInformationsMail.innerHTML =`
   <div class="accountInformations animate__animated animate__fadeIn ">
   <p style="font-size:20px; margin-top:15px;" class="text-center fw-bold">Mail Adress Change</p> <br>
   <div id="mailInputs">
   <label>Old Mail Adress :</label>
   <input style="margin-bottom: 20px; padding:5px; border-radius:5px;" type="password" placeholder="Old mail adress.."><br>
   <label>New Mail Adress :</label>
   <input style="margin-bottom: 20px; padding:5px; border-radius:5px;" type="password" placeholder="New Mail Adress.."><br>
   <button style="margin-left:90px; margin-bottom:20px" class="btn btn-primary" type="button">Reset Mail Adress</button>
   </div>
   `;


}


});