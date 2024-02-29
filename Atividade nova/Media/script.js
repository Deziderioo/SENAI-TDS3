function calcular(){
    
    var num01 = document.getElementById("num1").valueAsNumber;
    var num02 = document.getElementById("num2").valueAsNumber;
    var num03 = document.getElementById("num3").valueAsNumber;
    var total = (num01 + num02 + num03) / 3;

    if(total >= 6){
        document.getElementById("resultView").style.color = "green"
        document.getElementById("resultView").textContent = total.toFixed(2);
    }
    else{
        document.getElementById("resultView").style.color = "red"
        document.getElementById("resultView").textContent = total.toFixed(2);
    }
    
    document.getElementById("resultView").style.display = "block";

}