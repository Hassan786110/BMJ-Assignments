const showpass = _ => {
    let password = document.getElementById("password");
    password.type == "password" ? password.type = "text" : password.type = "password";
}

const signup = _ => {
    let fname = document.getElementById("first");
    let lname = document.getElementById("last");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let password = document.getElementById("password");
    if(fname.value != "" && lname.value != "" && email.value != "" && phone.value != "" && password.value != ""){
        const userobj = {
            First_Name: fname.value,
            Last_Name: lname.value,
            Email_Address: email.value,
            Phone_Number: phone.value,
            Password: password.value,
        }
        const user = JSON.parse(localStorage.getItem("user")) || [];
        const userIndex = user.findIndex(value => {
            return value.email === userobj.Email_Address
        })
        if(userIndex === -1){
            user.push(userobj);
            localStorage.setItem("user" , JSON.stringify(user));
            document.getElementById("heading").innerHTML = "Sign Up Successfull";
            document.getElementById("popup").style.display = "flex";
            setTimeout(function(){window.location.assign("./login.html");} , 2000);
        }
        else{
            document.getElementById("heading").innerHTML = "Email already exists";
            document.getElementById("popup").style.display = "flex";
            setTimeout(function(){document.getElementById("popup").style.display = "none";} , 2000);
        }
    }
}

const login = _ => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    if(email.value != "" && password.value != ""){
        const userdata = JSON.parse(localStorage.getItem("user"));
        const checkuser = userdata.findIndex((value) => {
            return email.value == value.Email_Address && password.value == value.Password
        })
        if(checkuser > -1){
            localStorage.setItem("currentuser" , JSON.stringify(email.value));
            document.getElementById("heading").innerHTML = "Login In Successful";
            document.getElementById("popup").style.display = "flex";
            setTimeout(function(){window.location.assign("./Dashboard.html")} , 2000);
        }
        else{
            document.getElementById("heading").innerHTML = "Invalid Credentials";
            document.getElementById("popup").style.display = "flex";
            setTimeout(function(){document.getElementById("popup").style.display = "none";} , 2000);
        }
    }
}

const dashboard = _ => {
    const userdata = JSON.parse(localStorage.getItem("currentuser"));
    const userdata2 = JSON.parse(localStorage.getItem("user"));
    const checkdata = userdata2.findIndex((value) => {
        return userdata == value.Email_Address
    })
    if(checkdata > -1){
        document.getElementById("first").innerHTML = userdata2[checkdata].First_Name;
        document.getElementById("last").innerHTML = userdata2[checkdata].Last_Name;
        document.getElementById("email").innerHTML = userdata2[checkdata].Email_Address;
        document.getElementById("phone").innerHTML = userdata2[checkdata].Phone_Number;
        document.getElementById("password").innerHTML = userdata2[checkdata].Password;
    }
}