// let a = require("readline-sync");
// var x=a.questionInt("enter the number")
// var y=a.questionInt("enter the number")
// var z=a.question("enter the operator")
// switch(x,y,z){
//         case z=="%": 
//             console.log(x%y)
//             break
//         case z=="*":
//             console.log(x*y)
//             break
//         case z=="-":                                                                                                               
//             console.log(x-y)
//             break
//         case z=="+":
//             console.log(x+y)
//             break
//         case z=="/":
//             console.log(x/y)
//             break
        
//         case z=="**":
//             console.log(x**y)
//             break
//         default:
//             console.log("error")
//             break
// }


let result;

// take the operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

switch(operator) {
    case '+':
        result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;
    case '-':
        result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;
    case '*':
        result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;
    case '/':
        result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;

    default:
        console.log('Invalid operator');
        break;
}