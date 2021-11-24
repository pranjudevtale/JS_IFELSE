let a= (require("readline-sync"));
var days=a.questionInt("enter the  days")
switch(days){
    case 31:
        console.log("january","may","march","july","august","october","december")
    case 30:
        console.log("april","june","september","november")
    case 28 || 29:
        console.log("february")
    default:
        console.log("nothing")
}