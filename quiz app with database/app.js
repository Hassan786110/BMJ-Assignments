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

var ques = document.getElementById("question");
var opt = document.getElementsByClassName("radio_btn");
var radio = document.getElementsByClassName("circle");
var count = 0;
var count2 = 1;

function showques(){
    app.database().ref('/quiz').once("child_added",function (data){
        ques.innerHTML = count2++ + ". " + data.val()[count].question;
        for(var i = 0; i < 4; i++){
            opt[i].innerHTML = data.val()[count].options[i]
        } 
    });
}
var score = 0;
function next(){
    if(count < 10){
        for(var i = 0; i < 4; i++){
            if(radio[i].checked){
                app.database().ref('/quiz').once("child_added",function (data){
                    if(opt[i].innerHTML == data.val()[count].answer){
                        score++;
                    }
                })
                count++;
                app.database().ref(`/value/${-Ms0ATmU3CAkltPbQmUQ}`).update({number: count3});
                showques();
                radio[i].checked = false;
                break;
            }
        }
    }
    else{
        alert("Your Score is " + score + "%");
    }
}
