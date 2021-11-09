var num = +prompt("Enter a Number");

document.getElementById("num").innerHTML = num;

var sign = prompt("Sign");

document.getElementById("sign").innerHTML = sign;

var num2 = +prompt("Enter a Number");

document.getElementById("num2").innerHTML = num2;

if(sign == "+"){
    var add = num + num2;
    document.getElementById("output").innerHTML = add;
}
else if(sign == "-"){
    var subract = num - num2;
    document.getElementById("output").innerHTML = subract;
}
else if(sign == "/"){
    var Divide = num / num2;
    document.getElementById("output").innerHTML = Divide;
}
else if(sign == "*"){
    var Multiply = num * num2;
    document.getElementById("output").innerHTML = Multiply;
}
else if(sign == "%"){
    var Modulus = num % num2;
    document.getElementById("output").innerHTML = Modulus;
}
else{
    alert("Your Equation is Wrong");
}
