window.onscroll = scroll_func;
function scroll_func() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("container1").className = "div-width";
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            document.getElementById("small-container").className = "div-top";
        }
        else {
            document.getElementById("small-container").className = "";
        }
    }
    else {
        document.getElementById("container1").className = "";
    }
}

var opt = document.getElementsByClassName("input2");
var slt = document.getElementById("selected_days");

function d(val) {
    if (val.childNodes[7].selected) {
        slt.setAttribute("class", "display");
    }
    else {
        if (slt.className == "display") {
            slt.className = "";
            for (var i = 1; i <= 7; i++) {
                console.log(opt[i].checked)
                if (opt[i].checked) {
                    opt[i].checked = false;
                }
            }
        }
    }
}

const firebaseConfig = {
    apiKey: "AIzaSyAqaSYi4E528Bfwb10Sa-fDHdgk6ofa4-o",
    authDomain: "al-hadi-dairy.firebaseapp.com",
    projectId: "al-hadi-dairy",
    storageBucket: "al-hadi-dairy.appspot.com",
    messagingSenderId: "767691400160",
    appId: "1:767691400160:web:cec368e898f1c145514185"
};
const app = firebase.initializeApp(firebaseConfig);

function submit() {
    var username = document.getElementById("username");
    var email = document.getElementById("email");
    var number = document.getElementById("number");
    var litre = document.getElementById("litre");
    var address = document.getElementById("adres-field");
    var plan = document.getElementById("plan");
    var num = [];
    if (username.value != "" && email.value != "" && number.value != "" && address.value != "") {
        var flag = true;
        var count = 0;
        for(var y = 0; y < 11; y++){
            var p = number.value.charCodeAt(y);
            num.push(p);
            if(num[y] <= 57){
                count++;
            }
        }
        if(plan.childNodes[1].selected == false && litre.childNodes[1].selected == false && count == 11 && number.value.length == 11){
            if (document.getElementById("select_days").selected) {
                flag = false;
                var opt = document.getElementsByClassName("input2");
                var opt_arr = [];
                var days_arr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
                for (var i = 0; i < opt.length; i++) {
                    if (opt[i].checked) {
                        opt_arr.push(days_arr[i]);
                        opt[i].checked = false;
                    }
                }
                if (opt_arr != "") {
                    var order = {
                        Name: username.value,
                        Email: email.value,
                        Phone: number.value,
                        Litre: litre.value,
                        Address: address.value,
                        schedule: plan.value,
                        Days: opt_arr,
                    }
                    app.database().ref('/orders').push(order);
                    username.value = "";
                    email.value = "";
                    number.value = "";
                    litre.childNodes[1].selected = true;
                    address.value = "";
                    plan.childNodes[1].selected = true;
                    slt.className = "";
                }
                else{
                    alert("Please FullFill all the fields and Correctly");
                }
            }
            if (flag) {
                var order = {
                    Name: username.value,
                    Email: email.value,
                    Phone: number.value,
                    Litre: litre.value,
                    Address: address.value,
                    schedule: plan.value,
                }
                app.database().ref('/orders').push(order);
                username.value = "";
                email.value = "";
                number.value = "";
                litre.childNodes[1].selected = true;
                address.value = "";
                plan.childNodes[1].selected = true;
            }
        }
        else{
            alert("Please FullFill all the Fields and Correctly");
        }
    }
    else{
        alert("Please FullFill all the Fields and Correctly");
    }
}