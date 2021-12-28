var count = 0;
var count2 = 1;
var count3 = 0;
var count4 = 0;
var arr = [];
var arr2 = [];
const firebaseConfig = {
    apiKey: "AIzaSyAqaSYi4E528Bfwb10Sa-fDHdgk6ofa4-o",
    authDomain: "al-hadi-dairy.firebaseapp.com",
    projectId: "al-hadi-dairy",
    storageBucket: "al-hadi-dairy.appspot.com",
    messagingSenderId: "767691400160",
    appId: "1:767691400160:web:cec368e898f1c145514185"
};
const app = firebase.initializeApp(firebaseConfig);

function getdata() {
    app.database().ref('/orders').on("child_added", function (data) {
        build();
        arr.push(data.key);
        var div_ele3 = document.createElement("div");
        div_ele3.setAttribute("class", "d");
        var h3_ele2 = document.createElement("h3");
        var h3_ele3 = document.createElement("h3");
        var h3_ele4 = document.createElement("h3");
        var h3_ele5 = document.createElement("h3");
        var h3_ele6 = document.createElement("h3");
        var h3_ele7 = document.createElement("h3");
        h3_ele2.innerHTML = "Name = " + data.val().Name;
        h3_ele3.innerHTML = "Email Address = " + data.val().Email;
        h3_ele4.innerHTML = "Phone Number = " + data.val().Phone;
        h3_ele5.innerHTML = "Address = " + data.val().Address;
        h3_ele6.innerHTML = "Litres of Milk = " + data.val().Litre;
        h3_ele7.innerHTML = "Schedule = " + data.val().schedule;
        div_ele3.appendChild(h3_ele2);
        div_ele3.appendChild(h3_ele3);
        div_ele3.appendChild(h3_ele4);
        div_ele3.appendChild(h3_ele5);
        div_ele3.appendChild(h3_ele6);
        div_ele3.appendChild(h3_ele7);
        if (data.val().schedule == "Select days") {
            var h3_ele8 = document.createElement("h3");
            h3_ele8.innerHTML = "Selected Days = ";
            for (var v = 0; v < data.val().Days.length; v++) {
                h3_ele8.innerHTML = h3_ele8.innerHTML + data.val().Days[v] + " ";
            }
            div_ele3.appendChild(h3_ele8);
        }
        document.getElementById("small").parentNode.childNodes[count].appendChild(div_ele3);
        document.getElementsByClassName("d")[count].style.display = "none";
        count++;
        document.getElementById("receive").innerHTML = count;
        count4++;
        document.getElementById("left").innerHTML = count4;
        count2++;
    });
    app.database().ref('/completed').on("child_added", function (func) {
        var local = func.val().num;
        --local;
        var origin = document.getElementById("sub-container2").childNodes[local].childNodes[0];
        arr2[local] = func.key;
        var div_ele4 = document.createElement("div");
        div_ele4.setAttribute("id", "small-div");
        var i_ele = document.createElement("i");
        i_ele.setAttribute("class", "fa fa-check-circle");
        i_ele.setAttribute("id", "icon");
        div_ele4.appendChild(i_ele);
        div_ele4.appendChild(document.createTextNode("Order Completed"));
        origin.insertBefore(div_ele4, origin.childNodes[1]);
        count3++;
        document.getElementById("complete").innerHTML = count3;
        count4--;
        document.getElementById("left").innerHTML = count4;
    })
    app.database().ref('/personal info').on("child_added",function(gh){
        document.getElementById("phone").innerHTML = gh.val().phone;
        document.getElementById("mail").innerHTML = gh.val().email;
    })
}
function b() {
    document.getElementById("main-div").style.display = "none";
    document.getElementById("main-div2").style.display = "flex";
    getdata();
}

function settings() {
    document.getElementById("heading").innerHTML = "Settings";
    document.getElementById("settings").style.color = "white";
    document.getElementById("set").style.color = "#FF1262";
    document.getElementById("ordr").style.color = "#595680";
    document.getElementById("shop").style.color = "#595680";
    document.getElementById("home").style.color = "#595680";
    document.getElementById("ho").style.color = "#595680";
    document.getElementById("shop").parentNode.setAttribute("onmouseover", "mouse_in()");
    document.getElementById("shop").parentNode.setAttribute("onmouseout", "mouse_out()");
    document.getElementById("home").parentNode.setAttribute("onmouseover", "mouse_in3()");
    document.getElementById("home").parentNode.setAttribute("onmouseout", "mouse_out3()");
    document.getElementById("set").parentNode.removeAttribute("onmouseover", "mouse_in2()");
    document.getElementById("set").parentNode.removeAttribute("onmouseout", "mouse_out2()");
    document.getElementById("sub-container1").style.display = "none";
    document.getElementById("sub-container2").style.display = "none";
    document.getElementById("sub-container3").style.display = "flex";
    document.getElementById("main-div").style.display = "flex";
    document.getElementById("main-div2").style.display = "none";
}

function change() {
    document.getElementById("heading").innerHTML = "Home";
    document.getElementById("home").parentNode.removeAttribute("onmouseover", "mouse_in3()");
    document.getElementById("home").parentNode.removeAttribute("onmouseout", "mouse_out3()");
    document.getElementById("shop").parentNode.setAttribute("onmouseover", "mouse_in()");
    document.getElementById("shop").parentNode.setAttribute("onmouseout", "mouse_out()");
    document.getElementById("set").parentNode.setAttribute("onmouseover", "mouse_in2()");
    document.getElementById("set").parentNode.setAttribute("onmouseout", "mouse_out2()");
    document.getElementById("set").style.color = "#595680";
    document.getElementById("settings").style.color = "#595680";
    document.getElementById("shop").style.color = "#595680";
    document.getElementById("ordr").style.color = "#595680";
    document.getElementById("home").style.color = "white";
    document.getElementById("ho").style.color = "#FF1262";
    document.getElementById("sub-container2").style.display = "none";
    document.getElementById("sub-container3").style.display = "none";
    document.getElementById("sub-container1").style.display = "flex";
    document.getElementById("main-div").style.display = "flex";
    document.getElementById("main-div2").style.display = "none";
}

function mouse_in3() {
    document.getElementById("home").style.color = "white";
    document.getElementById("ho").style.color = "#FF1262";
}
function mouse_out3() {
    document.getElementById("home").style.color = "#595680";
    document.getElementById("ho").style.color = "#595680";
}
function mouse_in() {
    document.getElementById("ordr").style.color = "white";
    document.getElementById("shop").style.color = "#FF1262";
}
function mouse_out() {
    document.getElementById("ordr").style.color = "#595680";
    document.getElementById("shop").style.color = "#595680";
}
function mouse_in2() {
    document.getElementById("settings").style.color = "white";
    document.getElementById("set").style.color = "#FF1262";
}
function mouse_out2() {
    document.getElementById("settings").style.color = "#595680";
    document.getElementById("set").style.color = "#595680";
}

function order() {
    document.getElementById("heading").innerHTML = "Orders";
    document.getElementById("ordr").style.color = "white";
    document.getElementById("shop").style.color = "#FF1262";
    document.getElementById("home").style.color = "#595680";
    document.getElementById("ho").style.color = "#595680";
    document.getElementById("set").style.color = "#595680";
    document.getElementById("settings").style.color = "#595680";
    document.getElementById("set").parentNode.setAttribute("onmouseover", "mouse_in2()");
    document.getElementById("set").parentNode.setAttribute("onmouseout", "mouse_out2()");
    document.getElementById("shop").parentNode.removeAttribute("onmouseover", "mouse_in()");
    document.getElementById("shop").parentNode.removeAttribute("onmouseout", "mouse_out()");
    document.getElementById("home").parentNode.setAttribute("onmouseover", "mouse_in3()");
    document.getElementById("home").parentNode.setAttribute("onmouseout", "mouse_out3()");
    document.getElementById("sub-container1").style.display = "none";
    document.getElementById("sub-container2").style.display = "flex";
    document.getElementById("sub-container3").style.display = "none";
    document.getElementById("main-div").style.display = "flex";
    document.getElementById("main-div2").style.display = "none";
}
function build() {
    var div_ele = document.createElement("div");
    div_ele.setAttribute("id", "generate");
    var h3_ele = document.createElement("h3");
    h3_ele.innerHTML = count2 + ". order";
    var div_ele2 = document.createElement("div");
    var btn1 = document.createElement("button");
    btn1.setAttribute("onclick", "detail(this)");
    btn1.setAttribute("class", "btn");
    btn1.innerHTML = "Details";
    var btn2 = document.createElement("button");
    btn2.setAttribute("onclick", "complete(this)");
    btn2.setAttribute("class", "btn");
    btn2.innerHTML = "Complete";
    var btn3 = document.createElement("button");
    btn3.setAttribute("onclick", "del(this)");
    btn3.setAttribute("class", "btn");
    btn3.innerHTML = "Delete";
    div_ele.appendChild(h3_ele);
    div_ele2.appendChild(btn1);
    div_ele2.appendChild(btn2);
    div_ele2.appendChild(btn3);
    div_ele.appendChild(div_ele2);
    var small = document.createElement("div");
    small.setAttribute("id", "small");
    small.appendChild(div_ele);
    document.getElementById("sub-container2").appendChild(small);
}
function complete(p) {
    var origin = p.parentNode.parentNode.childNodes[1];
    if (origin.childNodes[0].innerHTML == "Details") {
        var local = p.parentNode.parentNode.childNodes[0].innerHTML[0];
        var obj = {
            num: local,
        }
        app.database().ref('/completed').push(obj);
    }
}
function detail(p) {
    var locate = p.parentNode.parentNode.childNodes[0].innerHTML[0];
    if (document.getElementsByClassName("d")[--locate].style.display == "none") {
        document.getElementsByClassName("d")[locate].style.display = "";
    }
    else {
        document.getElementsByClassName("d")[locate].style.display = "none";
    }
}
function del(p) {
    var origin = p.parentNode.parentNode.childNodes[0].innerHTML[0];
    app.database().ref('/orders').child(arr[--origin]).remove();
    arr.splice(origin, 1);
    var locate = p.parentNode.parentNode.childNodes[1].childNodes[1].innerHTML;
    if (locate != "Complete") {
        count3--;
        document.getElementById("complete").innerHTML = count3;

        app.database().ref('/completed').child(arr2[origin]).remove();

        arr2.splice(origin, 1);
        count4++;
    }
    p.parentNode.parentNode.parentNode.remove();
    count4--;
    document.getElementById("left").innerHTML = count4;
    count--;
    document.getElementById("receive").innerHTML = count;
    count2--;
    var t3 = 1;
    var t = document.getElementById("sub-container2").childNodes;
    var flag = false;
    for (var i = 0; i < t.length; i++) {
        var t2 = document.getElementById("sub-container2").childNodes[i].childNodes[0].childNodes[0].innerHTML[0];
        if (t2 != t3) {
            document.getElementById("sub-container2").childNodes[i].childNodes[0].childNodes[0].innerHTML = t3 + ". order";
            flag = true;
        }
        t3++;
    }
    if(flag){
        app.database().ref('/completed').on("child_added",function(df){
            var s = df.val().num
            var e = df.key;
            if(--s == ++origin){
                app.database().ref(`/completed/${e}`).update({num: s});
            }
            --origin;
        })
    }
}
function dl() {
    app.database().ref('/completed').remove();
    app.database().ref('/orders').remove();
    document.getElementById("sub-container2").innerHTML = "";
    count = 0;
    count3 = 0;
    count4 = 0;
    document.getElementById("receive").innerHTML = count;
    document.getElementById("left").innerHTML = count4;
    document.getElementById("complete").innerHTML = count3;
}
function show_pass() {
    var x = document.getElementById("pass_2");
    if (x.type == "password") {
        x.type = "text";
    }
    else {
        x.type = "password";
    }
}

function sub_2() {
    var u = document.getElementById("user_2");
    var p = document.getElementById("pass_2");
    app.database().ref('/personal info').on("child_added", function (data) {

        if (u.value == data.val().username) {
            if (p.value == data.val().password) {
                change();
            }
            else {
                alert("Incorrect Password");
            }
        }
        else {
            alert("Incorrect Username");
        }
        u.value = "";
        p.value = "";
    });
}
function forgot(){
    var input = prompt("Enter your Email Address or Phone Number");

    app.database().ref('/personal info').on("child_added",function(data){

        if(input == data.val().email || input == data.val().phone){
            var input2 = prompt("Enter new Password");
            
            app.database().ref('/personal info/-MrhgPMHB7MLq8D9rh9L').update({password: input2});
        }
        else{
            alert("Incorrect Email Address or Phone Number");
        }
    })
}

function change_phone(){
    var input = prompt("Enter your Phone Number");
    app.database().ref('/personal info/-MrhgPMHB7MLq8D9rh9L').update({phone: input});
    document.getElementById("phone").innerHTML = input;
}
function change_email(){
    var input = prompt("Enter your Email Address");
    app.database().ref('/personal info/-MrhgPMHB7MLq8D9rh9L').update({email: input});
    document.getElementById("mail").innerHTML = input;
}
function reset_btn(){
    var last_p = document.getElementById("last_pass");
    var new_p = document.getElementById("new_pass");

    app.database().ref("/personal info").once("child_added",function(ft){

        if(ft.val().password == last_p.value){

            app.database().ref('/personal info/-MrhgPMHB7MLq8D9rh9L').update({password: new_p.value});

        }
        else{
            alert("Incorrect Password");
        }
        last_p.value = "";
        new_p.value = "";
    })
}