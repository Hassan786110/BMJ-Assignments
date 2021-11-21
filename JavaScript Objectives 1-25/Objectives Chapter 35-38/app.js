// function my_function(){
//     var result = new Date();
//     document.write(result);
// }
// my_function();

// function greet(){
//     var first = prompt("Enter your First name : ");
//     var seccond = prompt("Enter Your Last name : ");
//     alert("Welcome! " + first + " " + seccond);
// }
// greet();

// function sum(){
//     var first = +prompt("Enter the first number : ");
//     var second = +prompt("Enter the second number : ");
//     var result = first + second;
//     alert("The sum of " + first + " and " + second + " is : " + result);
// }
// sum();

// function calculator(){
//     var num1 = +prompt("Enter the first number : ");
//     var operator = prompt("Enter the operator : ","+,-,*,/,%");
//     var num2 = +prompt("Enter the second number : ");
//     var result;
//     switch(operator){
//         case "+" :
//             result = num1 + num2;
//             alert("The Addition of " + num1 + " and " + num2 + " is " + result);
//         break;
//         case "-" :
//             result = num1 - num2;
//             alert("The Subraction of " + num1 + " and " + num2 + " is " + result);
//         break;
//         case "/" :
//             result = num1 / num2;
//             alert("The Division of " + num1 + " and " + num2 + " is " + result);
//         break;
//         case "*" :
//             result = num1 * num2;
//             alert("The Multiplication of " + num1 + " and " + num2 + " is " + result);
//         break;
//         case "%" :
//             result = num1 % num2;
//             alert("The Modulus of " + num1 + " and " + num2 + " is " + result);
//         break;
//         default :
//             alert("Your equation is invalid");
//     }
// }
// calculator();

// function square(){
//     var input = +prompt("Enter any number : ");
//     var result = input * input;
//     alert("The square of " + input + " is " + result);
// }
// square();

// function counting(){
//     var num1 = +prompt("Enter the starting number of the counting : ");
//     var num2 = +prompt("Enter the ending number of your counting : ");
//     for(var i = num1; i <= num2; i++){
//         document.write(i + "<br />");
//     }
// }
// counting();

// function find(){
//     var num1 = +prompt("Enter the base of right angled triangle : ");
//     var num2 = +prompt("Enter the perpendicular of right angled triangle : ");
//     var base = num1 * num1;
//     var perp = num2 * num2;
//     var result = base + perp;
//     var hypo = Math.sqrt(result);
//     alert("Hypotenuse of the right angled triangle is : " + hypo);
// }
// find();

// function area(){
//     var width = +prompt("Enter the width of the rectangle : ");
//     var height = +prompt("Enter the height of the rectangle : ");
//     var a = width * height;
//     alert("The Area of the rectangle is : " + a);
// }
// area();

// function palin(){
//     var input = [] = prompt("Enter a palindrome : ");
//     var copy = input.split("").reverse().join("");
//     if(input == copy){
//         alert("This is a palindrome");
//     }
//     else{
//         alert("This is not a palindrome");
//     }
// }
// palin();

// function leap(){
//     var leap = +prompt("Enter any leap year : ");
//     var result = leap % 4;
//     if(result == 0){
//         alert("This is leap year");
//     }
//     else{
//         alert("This is not a leap year");
//     }
// }
// leap();

// function ar1(){
//     var input = prompt("Enter the value a : ");
//     var input2 = prompt("Enter the value b : ");
//     var input3 = prompt("Enter the value c : ");
//     var result = (input + input2 + input3) / 2;
//     var area = result*(result - input)*(result - input2)*(result - input3);
//     alert("The area of the triangle is " + area); 
// }
// ar1();