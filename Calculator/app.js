var input = document.getElementById("input");
function num(val){
    input.value += val;
}
function erase(){
    input.value = "";
}
function del(){
    var result = input.value.slice(0,input.value.length - 1);
    input.value = result;
}
function result(){
    var final = eval(input.value);
    input.value = final;
}

