function EventListener(){
    document.getElementById("Calcular3numeros").addEventListener("click" , CalcularNumeros());
}

function CalcularNumeros(){

    var Numero1 = Number(document.getElementById("Numero1").value);
    var Numero2 = Number(document.getElementById("Numero2").value);
    var Numero3 = Number(document.getElementById("Numero3").value);


    var ImprimirComparacionNum = document.getElementById("CalcularNumeros");


    if (Numero1 > Numero2 && Numero1 > Numero3){
        ImprimirComparacionNum.innerText = "El Numero mayor es el " + " " + Numero1;
    }if (Numero2 > Numero1 && Numero2> Numero3){
        ImprimirComparacionNum.innerText = "El Numero mayor es el " + " " + Numero2;
    }if (Numero3 > Numero1 && Numero3 > Numero2){
        ImprimirComparacionNum.innerText = "El Numero mayor es el " + " " + Numero3;  
        
    }
        
    }






