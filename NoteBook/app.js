let title = document.getElementById("tittle");
let txt = document.getElementById("txt");

const add = _ =>{
    if(title.value != "" && txt != ""){
        let div_ele1 = document.createElement("div");
        div_ele1.setAttribute("class","sub-div3");
        let p_ele1 = document.createElement("p");
        let p_ele2 = document.createElement("p");
        let div_ele2 = document.createElement("div");
        div_ele2.setAttribute("class","sub-div4");
        let btn1 = document.createElement("button");
        let btn2 = document.createElement("button");
        btn1.innerHTML = "Edit";
        btn2.innerHTML = "Delete";
        btn1.setAttribute("onclick","edit(this)");
        btn2.setAttribute("onclick","dele(this)");
        btn1.setAttribute("class","btn");
        p_ele1.setAttribute("class","para")
        p_ele1.innerHTML = title.value;
        p_ele2.innerHTML = txt.value;
        div_ele1.appendChild(p_ele1);
        div_ele1.appendChild(p_ele2);
        div_ele2.appendChild(btn1);
        div_ele2.appendChild(btn2);
        div_ele1.appendChild(div_ele2);
        document.getElementById("container2").appendChild(div_ele1);
        title.value = "";
        txt.value = "";
    }
    else{
        alert("Enter the values");
    }
}
const del_all = _ => {
    document.getElementById("container2").innerHTML = "";
}
const edit = origin => {
    let result1 = origin.parentNode.parentNode.childNodes[0];
    let result2 = origin.parentNode.parentNode.childNodes[1];
    let ed1 = prompt("Enter The Title",result1.innerHTML);
    let ed2 = prompt("Enter The Title",result2.innerHTML);
    if(ed1 != "" && ed1 != null && ed2 != "" && ed2 != null){
        result1.innerHTML = ed1;
        result2.innerHTML = ed2;
    }
}
const dele = origin => {
    origin.parentNode.parentNode.remove();
}