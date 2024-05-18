//Primitive data types
// console.log("hello to javascript")
// const year1 = 20.21;
// let age = 25;
// let year = 20.21;
// let myNameame = 'John';
// let isAge = true;
// let myNickName = null;
// console.log(age, year, myNameame);
// //console with type of operator
// console.log(typeof age, typeof year, typeof myNameame, typeof isAge);


// non-primitive data types

// let ano_Object = {
//     "name" : "Anees",
//     "my profession": "Software Developer",

// }

// console.log(ano_Object);

// ano_Object.myHomeTown = "Ziarat";

// console.log(ano_Object);


//Arithematic operators
let x = 22;
let y = 6;

//addition
// x = x + y;
// console.log(x);
// x += y;
// console.log(x);

//subtraction
// x = x - y;
// x -= y;

// Multiplication
// x = x * y;  // x = 22 * 6 = 132
// x *= y; // x = 132 * 6 = 792
// console.log(x);

// // Division
// x = x / y;  // x = 792 / 6 = 132
// x /= y; // x = 132 / 6 = 22


// // Modulus (Remainder)
// console.log(x);
// console.log(y);
// x = x % y; // 792 % 6 = 0
// console.log("the remainder is: " + x);
// // x %= y;

// // Exponentiation
// x = x ** y;
//  console.log(x); // 4 ** 6 = 4096
// x **= y;

// let k = 6;
// let j = 7;
// if (k == j) {
//     console.log("Equal");
// }

// x == y   // Equal to
// x === y  // Strict equal to
// x != y   // Not equal to
// x !== y  // Strict not equal to
// x > y    // Greater than
// x >= y   // Greater than or equal to
// x < y    // Less than
// x <= y   // Less than or equal to

// x && y  // Logical AND
// x || y  // Logical OR
// !x      // Logical NOT

// If else statements

// if (condition) {
//     // code block which will run if the condition is true
// } else {
//     // code block
// }

// let hizbaAge = 18;

// if (hizbaAge > 18) {
//     console.log('You can create account');
// }
// else if (hizbaAge < 18) {
//     console.log('You cannot create account');
// }
// else {
//     console.log('You are 18 years old and you can create account by taking permission from your parents');
// }

// If else statements with logical operators

// let marks = 70;

// if (marks >= 90 && marks <= 100) {
//     console.log('Extraordianary you have been awarded with grade A+');
// }
// else if (marks >= 80 && marks < 90) {
//     console.log('Excellent you have been awarded with grade A');
// }
// else if (marks >= 70 && marks < 80) {
//     console.log('Good you have been awarded with grade B');
// }
// else if (marks >= 60 && marks < 70) {
//     console.log('Fair you have been awarded with grade C');
// }
// else {
//     console.log('FailOOOO');
// }


// let x = 5;
// let y = 10;

// if (x > 10 || y > 8) {
//     console.log("Either x or y is greater than 10");
// } else {
//     console.log("Neither x nor y is greater than 10");
// }

//Thora dimagh lagao
// let instructor = 'Aisha';
// let total_Strength = 25;
// let attendance = 80;

// if ((instructor === 'Anees' || instructor !== 'Anees') && total_Strength > 20 && attendance >= 80) {
//     console.log("Trade Successfull");
// } else {
//     console.log("Conditions not met.");
// }

// Loops In Javascript 

// let i = 0;

// while (i <= 50) {
//     console.log("my name is Anno's " + i);
//     i ++;
// }

// for (let i = 10; i >0; i--) {
//     console.log(i); //  
// }

//Functions in Javascript

function introVaneeza() {
    console.log("Name:Vaneeza");
    console.log("Age: 23");
    console.log("HOme Town : Abbotabad");
    console.log("Bad Habit: My teacher always say to me Vaneeza Gallan na kara kar");
}

// introVaneeza();

function greetUser(name) {
    console.log("Hello " + name);
}

// greetUser("Eisha Sultan");

// greetUser("Kiran");

// greetUser("Anees");
// greetUser("Ali");
// greetUser("Aisha");

// function add(a, b) {
// console.log(a + b);
// }
// add(15, 6);
// let ans = add(5, 6);
// console.log(add(5, 6));
// add(5, 6);

// console.log(add(5, 6));

// let result = add(5, 6);

// console.log(result);

// function to reverse a string

// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// console.log(reverseString("Maria Khan"));  // Outputs: 'olleh'

// // function to check if a number is even or odd

// function isEvenOrOdd(num) {
//     if (num % 2 === 0) {
//         return 'Even';
//     } else {
//         return 'Odd';
//     }
// }

// console.log(isEvenOrOdd(1056));  // Outputs: 'Even'
// isEvenOrOdd(933);  // Outputs: 'Even'
// let number = 15;
// let result = isEvenOrOdd(number);

// console.log(result);  // Outputs: 'Even'

// // function to check if a number is prime

function isPrime(num) {
    if (num <= 1) {
        return false;
    } else if (num === 2) {
        return true;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
}

//fibonacci series
// 1 1 2 3 5 8 13 21 34 55 89 144

console.log(isPrime(12));  // Outputs: true.

// // function to find the factorial of a number



function factorial(number) {
    let result = 1;
    for (let i = 2; i <= number; i++) {  // 2 3 4 5
        result *= i;  // result = result * i;  //  2 6 24 120
    }
    return result;
}

console.log(factorial(5)); 

// // function to find the maximum of two numbers
//ternary operator
function max(a, b) {
    return a > b ?  a : b;

}
console.log(max(16, 210));  // Outputs: 210

// Outputs: 10











