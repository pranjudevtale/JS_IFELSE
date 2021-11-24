

let readlineSync = require("readline-sync");
var number=(readlineSync.questionInt("enter a number"));
if (number<10){                                                                         
console.log("num is less than 10");
}
else if(number>10 && number<20){
console.log("num is less than 20");
}
else{
console.log("greater than 20");
}

// var a=require("readline-sync");
// var num=a.questionInt("enter the number");
// var num1=a.questionInt("enter the number");
// sum=num+num1;
// console.log(sum)