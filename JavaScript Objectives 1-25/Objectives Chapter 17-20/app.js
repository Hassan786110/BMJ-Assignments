// var arr1 = [0,1,2,3,[1,0,1,2,[2,1,0,1]]];
// document.write("<h2>" + arr1 + "</h2>");

// var x = 0;
// for(var i = 0; i < 10; i++){
//     x++;
//     document.write(x + "<br />");
// }

// var input = +prompt("Enter a number to show its multiplication table : ");
// var value = +prompt("Enter Length multiplication table : ");
// document.write("<h3>Multiplication table of " + input + "</h3>");
// document.write("<h3>Length " + value + "</h3><br />");
// var x = 0;
// var result;
// for(var i = 0; i < value; i++){
//     x++;
//     result = input * x;
//     document.write(input + " x " + x + " = " + result + "<br />");
// }

// var fruits = [];
// fruits[0] = prompt("Enter a Fruit name you like : ");
// fruits[1] = prompt("Enter a Fruit name you like : ");
// fruits[2] = prompt("Enter a Fruit name you like : ");
// fruits[3] = prompt("Enter a Fruit name you like : ");
// fruits[4] = prompt("Enter a Fruit name you like : ");
// for(var i = 0; i < fruits.length; i++){
//     document.write("<h2>" + fruits[i] + "</h2>");
// }
// for(var x = 0; x < fruits.length; x++){
//     document.write("<h2>Element at index " + x + " is " + fruits[x] + "</h2>");
// }

// var num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// document.write("<h2>Counting : <br />" + num + "</h2>");
// num.reverse();
// document.write("<h2>Reverse counting : <br />" + num + "</h2>");
// num.reverse();
// var result = [];
// var otherwise = [];
// var first = [];
// var x = 0;
// var y = 0;
// for(var i = 0; i < num.length; i++){
//     result[i] = num[i] % 2;
//     if(result[i] == 0){
//         first[y] = num[i];
//         y++;
//     }
//     else{
//         otherwise[x] = num[i];
//         x++;
//     }
// }
// document.write("<h2>Even : <br />" + first + "</h2>");
// document.write("<h2>Odd : <br />" + otherwise + "</h2>");
// var arr = [];
// for(var z = 0; z < first.length; z++){
//     arr[z] = first[z] + "k";
// }
// document.write("<h2>Series : <br />" + arr);

// var a = ["cake", "apple pie", "cookie", "chips", "patties"];
// var input = [];
// for(var i = 0; i < a.length; i++){
//     input[i] = prompt("Welcome to Tahir Bakery, What do you want to order sir/ma'am ? ");
// }
// var flag = true;
// for(var x = 0; x < a.length; x++){
//     flag = true;
//     for(var y = 0; y < a.length; y++){
//         if(a[y] == input[x]){
//             document.write("<h2>" + input[x] + " is available at index " + y + " in our bakery</h2>");
//             flag = false;
//         }
//     }
//     if(flag){
//         document.write("<h2>We are sorry. " + input[x] + " is not available in our bakery</h2>");
//     }
// }

// var num = [];
// for(var i = 0; i < 5; i++){
//     num[i] = +prompt("Enter a number : ");
// }
// var big1;
// var big2;
// var semi;
// var final;
// if(num[0] < num[1]){
//     big1 = num[1];
// }
// else{
//     big1 = num[0];
// }
// if(num[2] < num[3]){
//     big2 = num[3];
// }
// else{
//     big2 = num[2];
// }
// if(big1 < big2){
//     semi = big2; 
// }
// else{
//     semi = big1;
// }
// if(semi < num[4]){
//     final = num[4];
// }
// else{
//     final = semi;
// }
// document.write("<h2>Array items : " + num + "</h2>");
// document.write("<h2>The largest number is : " + final + "</h2>");

// var num = [];
// for(var i = 0; i < 5; i++){
//     num[i] = +prompt("Enter a number : ");
// }
// var big1;
// var big2;
// var semi;
// var final;
// if(num[0] < num[1]){
//     big1 = num[0];
// }
// else{
//     big1 = num[1];
// }
// if(num[2] < num[3]){
//     big2 = num[2];
// }
// else{
//     big2 = num[3];
// }
// if(big1 < big2){
//     semi = big1; 
// }
// else{
//     semi = big2;
// }
// if(semi < num[4]){
//     final = semi;
// }
// else{
//     final = num[4];
// }
// document.write("<h2>Array items : " + num + "</h2>");
// document.write("<h2>The Smallest number is : " + final + "</h2>");

