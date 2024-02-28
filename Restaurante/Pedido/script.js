function comecar(){
    var nome = document.getElementById("exampleFormControlInput1").value; 
    show(nome);
}

function show(nome){
    document.getElementById("nomePrint").textContent = nome;
    var div = document.getElementById("selects-div");
    if(nome && nome.trim() !== ""){
        div.style.display = "block";
        document.getElementById("exampleFormControlInput1").style.background = "none"
    }else{
        document.getElementById("error").style.display = "flex"
    }
}

function fechar(){
    document.getElementById("error").style.display = "none"
    document.getElementById("exampleFormControlInput1").style.background = "lightpink"
}

function calcularTotal(){
    var selectPratos = document.getElementById("selectPrato");
    var selectBebidas = document.getElementById("selectBebida");
    var selectSobremesas = document.getElementById("selectSobremesa");
    var resultadoSpan = document.getElementById("resultado");
    

    var total = 0;
    var prato = 0;
    var bebida = 0;
    var sobremesa = 0;

    switch (selectPratos.value) {
        case "Filé":
            total += 13.90;
            prato = 13.90;
            break;
        
         case "frango":
            total += 10.90;
            prato = 10.90;
            break;

         case "porco":
            total += 15.90;
            prato = 15.90;
            break;
    
    }
    
    switch (selectBebidas.value) {
        case "Bebida Alcoólica":
            total += 8.90;
            bebida = 8.90;
            break;
        case "Energético":
            total += 7.00;
            bebida = 7.00;
            break;
        case "Suco de laranja":
            total += 5.99;
            bebida = 5.99;
            break; 
    }
    
    switch (selectSobremesas.value) {
        case "Torta de cereja":
            total += 4.99;
            sobremesa = 4.99;
            break;
        case "Pudim de leite":
            total += 5.99;
            sobremesa = 5.99;
            break;
        case "Torta de Morango":
            total += 6.99;
            sobremesa = 6.99;
            break; 
    }

    document.getElementById("total").style.display = "flex";
    document.getElementById("prato-pronto").innerHTML = prato.toFixed(2);
    document.getElementById("bebida-pronto").innerHTML = bebida.toFixed(2);
    document.getElementById("sobremesa-pronto").innerHTML = sobremesa.toFixed(2);
    resultadoSpan.textContent = "R$"+ total;
}