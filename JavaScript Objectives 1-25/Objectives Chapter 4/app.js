// 1. Declare 3 variables in one statement.

var variable1;
var variable2;
var variable3;
var allvar = variable1 + variable2 + variable3;

// 2. Declare 5 legal & 5 illegal variable names.

// illegal variable names.

// var ?variable;
// var /variable;
// var 1variable;
// var (variable
// var %variable;
// var pakistan zindabad;
// illegal-variables

// legal variable names.

var variable1;
var $variable;
var _variable;
var pakistan_zindabad;
var legal,variables;

document.write("<h2> Rules for naming JS variables </h2>");

document.write("<br />Variables names can only contain , numbers , $ and _.For example : $my_1stVariable");
document.write("<br />Variable must begin with a letter , $ or _.For example : $name , _name or name");
document.write("<br />Variable names are case sensitive");
document.write("<br />Variable names should not be a JS keyword");