function EventListener(){
    document.getElementById("btnCalcular").addEventListener("clicl", CalularPar());
}

function CalularPar(){

    var numero = Number(document.getElementById("Numero1").value);
    var imprimirnp = document.getElementById("imprimirnp");

    if(numero % 2 == 0){
        imprimirnp.innerText = "El número es par";
    }else
    {
        imprimirnp.innerText = "El número es impar";
    }
}