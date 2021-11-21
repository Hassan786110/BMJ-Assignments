// JS Literal Notation

// var student = [];

// JS Object Notation

// var student = names();

// String array

// var string = ["ali","hassan","mehdi","muhammad","muntazir"];

// Number array

// var number = [1,2,3,4,5,6,7,8,9,10,11,12,13];

// boolean array

// var boolean = [true,false];

// Mixed array

// var Mixed = ["ali",1,true,"hassan",false,0];


// var qualification = ["SSC","HSC","BCS","BS","BCOM","MS","MPHIL","PHD"];
// document.write("<h2>Qualifications : </h2>");
// for(var i = 1; i < qualification.length; i++){
//     document.write("<br />" + i + " " + qualification[i]);
// }

// var student1 = prompt("Enter the First Student Name : ");
// var student2 = prompt("Enter the Second Student Name : ");
// var student3 = prompt("Enter the Third Student Name : ");
// var percent1 = +prompt("Enter the score of " + student1,"Score out of 500");
// var percent2 = +prompt("Enter the score of " + student2,"Score out of 500");
// var percent3 = +prompt("Enter the score of " + student3,"Score out of 500");
// var total1 = percent1 / 500 * 100;
// var total2 = percent2 / 500 * 100;
// var total3 = percent3 / 500 * 100;
// document.write("Score of " + student1 + " is " + percent1 + ". Percentage: " + total1 + "%");
// document.write("<br />Score of " + student2 + " is " + percent2 + ". Percentage: " + total2 + "%");
// document.write("<br />Score of " + student3 + " is " + percent3 + ". Percentage: " + total3 + "%");

// var color = ["red" , "yellow" , "blue" , "green"];
// document.write("<h2>" + color + "</h2>");
// var input = prompt("Enter the color you want to add at the begining : ");
// color.unshift(input);
// document.write("<h2>" + color + "</h2");
// input = prompt("Enter the color you want to add at the end : ");
// color.push(input);
// document.write("<br /><h2>" + color + "</h2>");
// input = prompt("Enter the color you want to add at the begining : ");
// color.unshift(input);
// input = prompt("Enter the color you want to add at the begining : ");
// color.unshift(input);
// document.write("<h2>" + color + "</h2>");
// color.shift();
// document.write("<h2>" + color + "</h2>");
// color.pop();
// document.write("<h2>" + color + "</h2>");
// input = +prompt("Enter the position or index number between 0 till 4 where you want to add the color name : ");
// var cname = prompt("Enter the color name you want to add at index number " + input);
// color.splice(input , 0 , cname);
// document.write("<h2>" + color + "</h2>");
// input = +prompt("Enter the index number from where you want to delete the colors : ");
// cname = +prompt("Enter the amount of colors you want to delete : ");
// color.splice(input , cname);
// document.write("<h2>" + color + "</h2>");

// var score = [];
// score[0] = +prompt("Enter the score of first student : ");
// score[1] = +prompt("Enter the score of second student : ");
// score[2] = +prompt("Enter the score of third student : ");
// score[3] = +prompt("Enter the score of fourth student : ");
// document.write("<h2>Scores of Students : " + score + "</h2>");
// score.sort();
// document.write("<h2>Ordered Scores of Students : " + score + "</h2>");

// var cities = ["Karachi" , "Islamabad" , "Peshawar" , "Punjab" , "Quetta"];
// alert("Cities List \n" + cities);
// var input = +prompt("Enter the index number between 0 till 4 from where you want to select the cities : ");
// var input2 = +prompt("Enter the number of cities you want to select from index number " + input);
// var select = cities.slice(input , input2);
// alert("Selected Cities List : \n" + select);

// var arr = ["This","is","my","cat"];
// document.write("<h2>Array : <br/>" + arr + "</h2>");
// var convert = arr.toString();
// var text = convert.replace(/,/g," ");
// document.write("<h2>String : <br />" + text + "</h2>");

// var devices = [];
// devices[0] = prompt("Enter the name of part of a computer : ");
// devices[1] = prompt("Enter the name of part of a computer : ");
// devices[2] = prompt("Enter the name of part of a computer : ");
// devices[3] = prompt("Enter the name of part of a computer : ");
// document.write("<h2>Devices : <br />" + devices + "</h2>")
// document.write("<h2>Out : <br />" + devices[0] + "</h2>");
// document.write("<h2>Out : <br />" + devices[1] + "</h2>");
// document.write("<h2>Out : <br />" + devices[2] + "</h2>");
// document.write("<h2>Out : <br />" + devices[3] + "</h2>");


// var devices = [];
// devices[0] = prompt("Enter the name of part of a computer : ");
// devices[1] = prompt("Enter the name of part of a computer : ");
// devices[2] = prompt("Enter the name of part of a computer : ");
// devices[3] = prompt("Enter the name of part of a computer : ");
// document.write("<h2>Devices : <br />" + devices + "</h2>");
// devices.reverse();
// document.write("<h2>Out : <br />" + devices[0] + "</h2>");
// document.write("<h2>Out : <br />" + devices[1] + "</h2>");
// document.write("<h2>Out : <br />" + devices[2] + "</h2>");
// document.write("<h2>Out : <br />" + devices[3] + "</h2>");

// var company = [];
// company[0] = prompt("Enter first phone manufacturer : ");
// company[1] = prompt("Enter second phone manufacturer : ");
// company[2] = prompt("Enter third phone manufacturer : ");
// company[3] = prompt("Enter fourth phone manufacturer : ");
// document.write("<h2>" + company[0] + "</h2>");
// document.write("<h2>" + company[1] + "</h2>");
// document.write("<h2>" + company[2] + "</h2>");
// document.write("<h2>" + company[3] + "</h2>");
