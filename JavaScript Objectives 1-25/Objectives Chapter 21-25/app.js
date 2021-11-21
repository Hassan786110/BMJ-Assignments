// var first = prompt("Enter Your First Name : ");
// var second = prompt("Enter Your Last Name : ");
// var fulname = first + " " + second;
// alert("Welcome! " + fulname);

// var phone = prompt("enter Your Favourite Mobile Phone Model : ");
// document.write("<h2>Your Favourite Phone is : " + phone);
// var length = phone.length;
// document.write("<h2>Length of String : " + length);

// var country = prompt("Enter the name of your favourite country : ");
// var alphabet = prompt("Enter the Alphabet whose index number you want to know : ");
// document.write("<h2>Your Favourite Country is : " + country + "</h2>");
// document.write("<h2>Alphabet : " + alphabet + "</h2>");
// var index = country.indexOf(alphabet);
// document.write("<h2>Index Number of Alphabet " + alphabet + " : " + index);

// var index = "Hello World".lastIndexOf("l");
// document.write("<h2>String : Hello World");
// document.write("<h2>Last index of 'l' : " + index + "</h2>");

// var input = prompt("Enter the Name of your Favourite country : ");
// document.write("<h2>String : " + input + "</h2>");
// var num = +prompt("Enter the Index Number to find the character : ");
// var index = input.charAt(num);
// document.write("<h2>Character at Index Number " + num + " : " + index + "</h2>");

// document.write("<h2>City : Hyderabad</h2>");
// var result = "Hyderabad".replace("Hyder","Islam");
// document.write("<h2>After Replacement : " + result + "</h2>");

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var final = message.replace(/and/g,"&");
// document.write("<h2>" + final + "</h2>");

// var input = prompt("Enter any Number : ");
// document.write("<h2>Value : " + input + "</h2>");
// document.write("<h2>Type : " + typeof(input) + "</h2>");
// var num = parseInt(input);
// document.write("<h2>Value : " + input + "</h2>");
// document.write("<h2>Type : " + typeof(num) + "</h2>");

// var input = prompt("Enter the text you want to convert in Uppercase : ");
// document.write("<h2>User Input : " + input + "</h2>");
// var Upper = input.toUpperCase();
// document.write("<h2>Upper case : " + Upper + "</h2>");

// var input = prompt("Enter the text you want to convert in title case : ");
// document.write("<h2>User Input : " + input + "</h2>");
// var title = input.charAt(0);
// var change = title.toUpperCase();
// var final = input.replace(title,change);
// document.write("<h2>Upper case : " + final + "</h2>");

// var num = +prompt("Enter any decimal value which you want to convert into string : ");
// document.write("<h2>Number : " + num + "</h2>");
// var change = num.toString().replace(".","");
// document.write("<h2>Result : " + change + "</h2>");

// var username = [];
// username = prompt("Enter username : ");
// var flag = false;
// for(var i = 0; i < username.length; i++){
//     if(username[i] == "@" || username[i] == "." || username[i] == "," || username[i] == "!"){
//         flag = true;
//     }
// }
// if(flag){
//     alert("Please enter valid username");
// }

// var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
// var items = [];
// for(var i = 0; i < bakery.length; i++){
//     items[i] = prompt("Enter the Tahir bakery what do you like to order sir/ma'am ? : ").toLowerCase();
// }
// var flag;
// for(var x = 0; x < bakery.length; x++){
//     flag = true;
//     for(var y = 0; y < bakery.length; y++){
//         if(bakery[y] == items[x]){
//             document.write("<h2>" + items[x] + " is available at index " + y + " in our bakery</h2>");
//             flag = false;
//         }
//     }
//     if(flag){
//         document.write("<h2>We are sorry. " + items[x] + " is not available in our bakery</h2>");
//     }
// }

// var pass = prompt("Enter your password : ","Password must be of at least 6 characters");
// var change = pass.charCodeAt(0);
// if(change <= 57){
//     alert("Password can not begin with a number\nPlease enter valid password");
// }
// else{
//     alert("Correct Password");
// }

// var university = [];
// university = prompt("Enter the University name you study in : ")
// for(var i = 0; i < university.length; i++){
//     document.write(university[i] + "<br />");
// }

// var input = prompt("Enter the Name of your Country : ");   
// var user = input.charAt(input.length - 1);
// document.write("<h2>User input : " + input + "<br />Last character of input : " + user + "</h2>");

// var input = "The quick brown fox jumps over the lazy dog".toLowerCase();
// var result = (input.match(/the/g)).length;
// document.write("<h2>Text : " + "The quick brown fox jumps over the lazy dog" + "<br />There are " + result + " occurrence(s) of the word 'the'</h2>");

