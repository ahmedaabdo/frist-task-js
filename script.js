// <------------------Student Grades----------------->
// let degree = prompt("enter your degree here !")
// if( isNaN(degree) || degree < 0 || degree > 100){
// console.log("Invaild Number");
// }
// else if(degree >=85){
// console.log("Excellent");
// }
// else if(degree >=75){
// console.log("very good");
// }
// else if(degree >=65){
// console.log("good");
// }
// else if(degree >=50){
// console.log("pass");
// }
// else{
// console.log("fail");
// }


// <------------------oprateor----------------->
// let num1=Number (prompt("enter frist number ?"));
// let opreator = prompt("enter opreator +,-,%,*,/")
// let num2=Number(prompt("enter socund number ?"))
// switch (opreator){
//     case("+"):
//     console.log("Result = " + (num1 + num2));
//     break;

//     case("-"):
//     console.log("result = " + (num1 - num2));
//     break;

//     case("*"):
//     console.log("result = " + (num1 * num2));
//     break;

//     case("/"):
//     if(num2===0){
//         console.log("Cannot divide by zero");
//     }
//     else{
//         console.log("result = " + (num1 / num2));
//     }
//     break;

//     case("%"):
//     if(num2===0){
//         console.log("Cannot divide by zero");
//     }
//     else{
//         console.log("result = " + (num1 % num2));
//     }
//     break;

//     default:
//         console.log("Unknown operator");
//         break;
// }




// <--------------leap&non-leap year------------>
// let year =prompt("enter year");
// if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//     console.log(year + " -> Leap Year");
// } else {
//     console.log(year + " -> Non-leap Year");
// }


// <--------------Multiplication Table------------>
// let input = prompt("Enter a number to print its multiplication table:");
// let number = Number(input);
// if (isNaN(number)) {
//     console.log("Please enter a valid number!");
// } else {
//     console.log(`--- Multiplication Table for ${number} ---`);
//     for (let i = 1; i <= 12; i++) {
//         let result = number * i;
//         console.log(`${number} x ${i} = ${result}`);
//     }
// }


// <--------------Even and Odd Sumr------------>
// let sumEven = 0;
// let sumOdd = 0;
// for (let i = 1; i <= 50; i++) {
//     if (i % 2 === 0) {
//         sumEven += i;
//     } 
//     else {
//         sumOdd += i;
//     }
// }
// console.log("مجموع الأعداد الزوجية:", sumEven);
// console.log("مجموع الأعداد الفردية:", sumOdd);


// <--------------FizzBuzz------------>
// for (let i = 1; i<=30; i++) {
// if (i % 3===0 && i % 5===0) {
//     console.log("FizzBuzz");
// }
// else if (i % 3===0) {
//     console.log("fizz");
    
// }
// else if (i % 5===0) {
//     console.log("buzz");
    
// }
// else{
//     console.log(i);
    
// }
// }

// <--------------Login with 3 Attempts------------>
// let password = "";
// let attempts = 0;

// while (attempts < 3) {
//     password = prompt("Enter the password:");
    
//     if (password === "js2026") {
//         console.log("Welcome back");
//         break;
//     } 
//     else {
//         attempts++;
//         if (attempts === 3) {
//             console.log("Account locked");
//         }
//     }
// }

// <-------------Reverse a Number------------>
// let num = 12345;
// let reversed = 0;

// while (num > 0) {
//     let lastnum = num % 10;                     
//     reversed = (reversed * 10) + lastnum;        
//     num = (num - lastnum) / 10;                  
// }

// console.log(reversed); 



