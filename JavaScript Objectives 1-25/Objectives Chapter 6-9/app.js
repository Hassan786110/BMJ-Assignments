// var a = +prompt("Enter the value of A");
// document.write("<h2>Result</h2>");
// document.write("Value of A is : " + a);
// ++a;
// document.write("<br /><br />The Value of ++A is : " + a); 
// document.write("<br />Now the value of A is : " + a);
// document.write("<br /><br />The value of A++ is : " + a);
// a++;
// document.write("<br />Now the value of A is : " + a);
// --a;
// document.write("<br /><br />The Value of --A is : " + a); 
// document.write("<br />Now the value of A is : " + a);
// document.write("<br /><br />The value of A-- is : " + a);
// a--;
// document.write("<br />Now the value of A is : " + a);

// var a = +prompt("Enter the value of A : ");
// var b = +prompt("Enter the value of B : ");
// document.write("<br />The value of A is : " + a);
// document.write("<br />The value of B is : " + b);
// --a;
// document.write("<br /><br />The value of --A is : " + a);
// document.write("<br />Now the Result is : " + a);
// var result = a - --b;
// document.write("<br /><br />The value of --A - --B is : " + result);
// document.write("<br />Now the result is : " + result);
// result = result + ++b;
// document.write("<br /><br />The value of --A - --B + ++B is : " + result);
// document.write("<br />Now the result is : " + result);
// document.write("<br /><br />The value of --A - --B + ++B + B-- is : " + result);
// result = result + b--;
// document.write("<br />Now the result is : " + result);

// var username = prompt("Enter Your Name : ","Full Name");
// alert("Hello " + username);

// var num = +prompt("Enter any number : ");
// var x = 0;
// var table;
// if(num == 0){
//     document.write("Table of 5");
//     for(var i = 0; i < 10; i++){
//         ++x;
//         table = 5 * x;
//         document.write("<br />5" + " x " + x + " = " + table);
//     }
// }
// else{
//     document.write("Table of " + num);
//     for(var i = 0; i < 10; i++){
//         ++x;
//         table = num * x;
//         document.write("<br />" + num + " x " + x + " = " + table);
//     }
// }

// var sub1 = prompt("Enter subject Number 1");
// var sub2 = prompt("Enter subject Number 2");
// var sub3 = prompt("Enter subject Number 3");
// var mark1 = +prompt("Enter Marks Obtained in " + sub1,"Out of 100");
// var mark2 = +prompt("Enter Marks Obtained in " + sub2,"Out of 100");
// var mark3 = +prompt("Enter Marks Obtained in " + sub3,"Out of 100");
// document.getElementById("sub1").innerHTML = sub1;
// document.getElementById("sub2").innerHTML = sub2;
// document.getElementById("sub3").innerHTML = sub3;
// document.getElementById("mark1").innerHTML = mark1;
// document.getElementById("mark2").innerHTML = mark2;
// document.getElementById("mark3").innerHTML = mark3;
// var percent1 = mark1 + "%";
// var percent2 = mark2 + "%";
// var percent3 = mark3 + "%";
// document.getElementById("percent1").innerHTML = percent1;
// document.getElementById("percent2").innerHTML = percent2;
// document.getElementById("percent3").innerHTML = percent3;
// var total = mark1 + mark2 + mark3;
// document.getElementById("total").innerHTML = total;
// var percentage = total / 300 * 100 + "%";
// document.getElementById("percentage").innerHTML = percentage;