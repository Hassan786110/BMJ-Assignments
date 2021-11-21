// var num1 = +prompt("Enter First number");
// var sign = prompt("Enter the sign");
// var num2 = +prompt("Enter Second number");
// var total;

// if(sign == "+"){
//     total = num1 + num2;
//     document.write("The Sum of " + num1 + " and " + num2 + " is " + total);
// }
// else if(sign == "-"){
//     total = num1 - num2;
//     document.write("The Subraction of " + num1 + " and " + num2 + " is " + total);
// }
// else if(sign == "*"){
//     total = num1 * num2;
//     document.write("The Multiplication of " + num1 + " and " + num2 + " is " + total);
// }
// else if(sign == "/"){
//     total = num1 / num2;
//     document.write("The Division of " + num1 + " and " + num2 + " is " + total);
// }
// else if(sign == "%"){
//     total = num1 % num2;
//     document.write("The Modulus of " + num1 + " and " + num2 + " is " + total);
// }
// else{
//     document.write("Your equation is invalid");
// }

// var num;
// document.write("value after variable declaration is : " + num);
// num = 5;
// document.write("<br />Initial Value : " + num);
// num++;
// document.write("<br />Value after increment is : " + num);
// num += 7;
// document.write("<br />Value after addition is : " + num);
// --num;
// document.write("<br />Value after decrement is : " + num);
// num %= 3;
// document.write("<br />The remainder is : " + num);

// var ticket = 600;
// var buy = +prompt("Enter the number of tickets you want to buy");
// var add = ticket * buy;
// document.write("Total cost to buy " + buy + " tickets to a movie is " + add + "PKR");

// var table = +prompt("Enter the number");
// document.write("Table of " + table);
// var x = 0;
// var tab;
// for(var i = 0; i < 10; i++){
//     x++;
//     var tab = table * x;
//     document.write("<br />" + table + " x " + x + " = " + tab);
// }

// var c = +prompt("Degree in Celcius");
// var c_f = (c * 9/5) + 32;
// document.write(c + "<sup>o</sup>C is " + c_f + "<sup>o</sup>F");
// var f = +prompt("Degree in Fahrenheit");
// var f_c = (f - 32) * 5/9;
// document.write("<br />" + f + "<sup>o</sup>F is " + f_c + "<sup>o</sup>C");

// document.write("<h2>Shopping Cart</h2>");
// var item1 = prompt("Enter the product name you want to buy");
// var quantity1 = +prompt("Enter the quantity of " + item1);
// var item2 = prompt("Enter the product name you want to buy");
// var quantity2 = +prompt("Enter the quantity of " + item2);
// var shipping = quantity1 + quantity2; 
// document.write("<br />Price of " + item1 + " is " + 500);
// document.write("<br />Quantity of " + item1 + " is " + quantity1);
// document.write("<br />Price of " + item2 + " is " + 300);
// document.write("<br />Quantity of " + item2 + " is " + quantity2);
// var pp;
// if(shipping <= 4){
//     document.write("<br />Shipping Charges : 100");
//     pp = 100;
// }
// else if(shipping <= 8){
//     document.write("<br />Shipping Charges : 200");
//     pp = 200;
// }
// else{
//     document.write("<br />Shipping Charges : 300");
//     pp = 300;
// }
// var price1 = 500 * quantity1;
// var price2 = 300 * quantity2;
// var addition = price1 + price2 + pp; 
// document.write("<br /><br />Total cost of your order is : " + addition);

// document.write("<h2>Mark Sheet</h2>");
// var totalmarks = +prompt("Enter your Total marks");
// var marksobt = +prompt("Enter your Obtain marks");
// document.write("<br />Total Marks : " + totalmarks);
// document.write("<br />Marks Obtained : " + marksobt);
// var percentage = marksobt / totalmarks * 100;
// document.write("<br />Percentage : " + percentage + "%");

// document.write("<h2>Currency in PKR</h2>");
// var dollar = +prompt("Enter the number of Dollars you want to convert : ");
// var riyal = +prompt("Enter the number of Riyals you want to convert : ");
// var a1 = dollar * 104.80;
// var a2 = riyal * 28;
// var totalpkr = a1 + a2;
// document.write("Total Currency in PKR : " + totalpkr);

// var num = 20 + 5 * 10 / 2;
// console.log(num);

// document.write("<h2>Age Calculator</h2>");
// var currentyear = +prompt("Enter the Current Year : ")
// document.write("<br />Current Year : " + currentyear);
// var birth = +prompt("Enter your Birth Year : ",1992);
// document.write("<br />Birth Year : " + birth);
// var age = currentyear - birth;
// document.write("<br />Your Age is : " + age);

// document.write("<h2>The Geometrizer</h2>");
// var radius = +prompt("Enter the Radius of a circle : ");
// document.write("<br />Radius of a circle : " + radius);
// var pie = 3.142;
// var Circumference = 2 * pie * radius;
// document.write("<br />The Circumference is : " + Circumference);
// var area = pie * (radius * radius);
// document.write("<br />The Area is : " + area);

// document.write("<h2>The Lifetime Supply Calculator</h2>");
// var snack = prompt("Enter your Favourite Snack : ");
// document.write("<br />Favourite Snack : " + snack);
// var age = +prompt("Enter your Current Age : ");
// document.write("<br />Current Age : " + age);
// var max_age = +prompt("Enter Your Estimated Maximum Age  : ");
// document.write("<br />Estimated Maximum Age : " + max_age);
// var snacks_per_day = +prompt("Enter the Amount of Snacks per day : ");
// document.write("<br />Amount of Snacks per day : " + snacks_per_day);
// var need = (max_age - age) * snacks_per_day;
// document.write("<br />You will need " + need + " " + snack + " to last you until the ripe old age of " + max_age);