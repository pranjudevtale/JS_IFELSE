// let a=require("readline-Sync");
let readlineSync = require("readline-sync");
var card=readlineSync.question("Hi, welcome to the ATM card:-");
if (card=="debit" || card=="credit"){
    console.log("transector in process")
    }
   var language=readlineSync.question("choose the language:-");
   if (language=="english" || language=="hindi"){
       console.log("information in english ")
       console.log("selected your english language")
    
        var PIN=readlineSync.questionInt("enter the PIN:-");
       if (PIN<=1456){
            console.log("it is correct")
        
            var account=readlineSync.question("enter the type:-");
            if (account=="saving" || account=="current"){
                console.log("select your account")
                
                var b=readlineSync.question("enter your balance ");
                if (b=="current enquirry"){
                    console.log("10000")
                
                    var transaction=readlineSync.questionInt("enter the transaction:-");
                    if (transaction =="withdrawal cash"){
                        console.log("withdrawal amount")
                    
                        var amount=readlineSync.questionInt("enter the amount");
                        if (amount>=00 || amount<=10000){
                           console.log("collect cash")
                        
                           var card=readlineSync.question("take your recept card");
                           if (card=="yes"){
                               console.log("thank you")
                           }
                            else{
                                console.log("no thanks")
                            }
                        }else{
                            console.log("not collect cash")
                        }
                    }else{
                        console.log("not withdrawal amount")
                    }
                }else{
                    console.log("not select your current enquirry")
                }         
            }else{
                console.log("incorrect")
            }
        }else{
         console.log("not select english language")
        }
}else{
    console.log("try again")
}