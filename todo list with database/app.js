const firebaseConfig = {
    apiKey: "AIzaSyDqgXnPQStOiT4w78emPx_u1YMOMOwA22M",
    authDomain: "resume-1bf01.firebaseapp.com",
    projectId: "resume-1bf01",
    storageBucket: "resume-1bf01.appspot.com",
    messagingSenderId: "726645577711",
    appId: "1:726645577711:web:2c79900ba577ca2cd5481a",
    measurementId: "G-S21WCWMEKN"
};

const app = firebase.initializeApp(firebaseConfig);

function add() {
    var input = document.getElementById("field");
    if (input.value != "") {
        var li_ele = document.createElement("li");
        var h3_ele = document.createElement("h3");
        var div_ele = document.createElement("div");
        var btn1 = document.createElement("button");
        btn1.setAttribute("onclick", "edit(this)");
        var btn2 = document.createElement("button");
        btn2.setAttribute("onclick", "del2(this)");
        btn1.setAttribute("id", "btn2");
        btn2.setAttribute("id", "btn3");
        btn1.innerHTML = "Edit";
        btn2.innerHTML = "Delete";
        div_ele.appendChild(btn1);
        div_ele.appendChild(btn2);
        h3_ele.innerHTML = input.value;
        li_ele.appendChild(h3_ele);
        li_ele.appendChild(div_ele);
        document.getElementById("list").appendChild(li_ele);
        input.value = "";
        app.database().ref('/html').remove();
        var a = document.getElementById("list").innerHTML;
        app.database().ref('/html').push(a);
    }
}
function set() {
    app.database().ref('/html').once("child_added", function (data) {
        document.getElementById("list").innerHTML = data.val();
    });
}
function del() {
    app.database().ref('/html').remove();
    document.getElementById("list").innerHTML = "";
}
function edit(val) {
    var locate = val.parentNode.parentNode.childNodes[0];
    var result = prompt("Enter your task", locate.innerHTML);
    console.log(result)
    if(result != "" && result != null){
        locate.innerHTML = result;
        app.database().ref('/html').remove();
        var a = document.getElementById("list").innerHTML;
        app.database().ref('/html').push(a);
    }
}
function del2(val) {
    val.parentNode.parentNode.remove();
    app.database().ref('/html').remove();
    var a = document.getElementById("list").innerHTML;
    app.database().ref('/html').push(a);
}