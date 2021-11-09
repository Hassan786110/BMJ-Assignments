var username = prompt("Enter Your Name");
document.getElementById("name").innerHTML = username;

var sub = prompt("Enter Your Subject Name","Biology / Computer");
document.getElementById("sub").innerHTML = sub;

var Math = +prompt("Enter Your Math Marks","out of 100");
document.getElementById("math").innerHTML = Math;

var eng = +prompt("Enter Your English Marks","out of 100");
document.getElementById("eng").innerHTML = eng;

var urdu = +prompt("Enter Your Urdu Marks","out of 100");
document.getElementById("urdu").innerHTML = urdu;

var pst = +prompt("Enter Your Pakistan Studies Marks","out of 100");
document.getElementById("p.st").innerHTML = pst;

var phy = +prompt("Enter Your Physics Marks","out of 100");
document.getElementById("phy").innerHTML = phy;

var chem = +prompt("Enter Your Chemistry Marks","out of 100");
document.getElementById("chem").innerHTML = chem;

var comp = +prompt("Enter Your"+ " " + sub + " " + "Marks","out of 100");
document.getElementById("comp").innerHTML = comp;

var isl = +prompt("Enter Your Islamiat Marks","out of 100");
document.getElementById("isl").innerHTML = isl;

var total = Math + eng + urdu + pst + phy + chem + comp + isl;
document.getElementById("total").innerHTML = total;