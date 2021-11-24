let readlineSync = require("readline-sync");
var a=readlineSync.question("enter day");
var b=readlineSync.question("enter your choice");
switch(a){
    case "monday":
        switch(b){

        case "breakfast":
            console.log("poha")
            break
        case "lunch":
            console.log("dalrice")
            break
        case "dinner":
            console.log("chapatisoyabean")
            break
        }
        break
    case "tuesday":
        switch(b){
        case "breakfast":
            console.log("chila")
            break
        case "lunch":
            console.log("palakrice")
            break
        case "dinner":
            console.log("chapatibrinjal")
            break
        }
        break
    case "wednesday":
        switch(b){
        case "breakfast":
            console.log("upma")
            break
        case "lunch":
            console.log("potatorice")
            break
        case "dinner":
            console.log("chapatimixveg")
            break
        }
        break
    case "thursday":
        switch(b){
        case"breakfast":
            console.log("idli")
            break
        case"lunch":
            console.log("brinjalrice")
            break
        case "dinner":
            console.log("chapatipaneer")
            break
        }
        break
    case "friday":
        switch(b){
        case "breakfast":
            console.log("dhosa")
            break
        case "lunch":
            console.log("moongrice")
            break
        case "dinner":
            console.log("chapatikaaju")
            break
        }
        break
        
    case "saturday":
        switch(b){
        case "breakfast":
            console.log("panipuri")
            break
        case "lunch":
            console.log("tomatorice")
            break
        case "dinner":
            console.log("chapatipotato")
            break
        }
    case "sunday":
        switch(b){
        case "breakfast":
            console.log("dhokla")
            break
        case "lunch":
            console.log("radishrice")
            break
        case "dinner":
            console.log("chapatiladyfinger")
            break
        }
        break
    default:
        console.log("not eating meal")
        break
}
