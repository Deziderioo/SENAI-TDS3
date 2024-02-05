function sum(){
    var num1 = document.getElementById("num1").valueAsNumber;
    var num2 = document.getElementById("num2").valueAsNumber;
    var sum = num1 + num2;
    document.getElementById("ResSoma").textContent = sum.toFixed(2); 
}
function sub(){
    var num3 = document.getElementById("num3").valueAsNumber;
    var num4 = document.getElementById("num4").valueAsNumber;
    var sub = num3 - num4;
    document.getElementById("ResSub").textContent = sub.toFixed(2); 
}
function div(){
    var num5 = document.getElementById("num5").valueAsNumber;
    var num6 = document.getElementById("num6").valueAsNumber;
    var div = num5 / num6;
    document.getElementById("ResDiv").textContent = div.toFixed(2); 
}
function mult(){
    var num7 = document.getElementById("num7").valueAsNumber;
    var num8 = document.getElementById("num8").valueAsNumber;
    var mult = num7 * num8;
    document.getElementById("ResMulti").textContent = mult.toFixed(2); 
}

function media(){
    var num9 = document.getElementById("num9").valueAsNumber;
    var num10 = document.getElementById("num10").valueAsNumber;
    var num11 = document.getElementById("num11").valueAsNumber;
    var media = (num9 + num10 + num11) / 3;
    document.getElementById("ResMed").textContent = media.toFixed(2); 

}