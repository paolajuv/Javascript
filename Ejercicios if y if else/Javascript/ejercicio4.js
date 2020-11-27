function EventListener(){
    document.getElementById("boton").addEventListener("click",dia());
}

function dia(){
    var dia = document.getElementById("dia").value;
    var imprimir = document.getElementById("imprimir");
    
    if(dia == "lunes"){
        imprimir.innerText = "San lunes"
    }else if(dia == "viernes"){
        imprimir.innerText = "Al fin viernes"
    }else if(dia == "sabado" || dia == "domingo"){
        imprimir.innerText = "Buen fin de semana"
    }else{
        imprimir.innerText = "No se encontró nada"
    }


}