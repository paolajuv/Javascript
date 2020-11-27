function EventListener(){
    document.getElementById("boton").addEventListener("click", numeroganador());
}

function numeroganador(){
   
    var num = Number(document.getElementById("numero").value);
    var resultado = document.getElementById("imprimir");

    if(num == 1000){
        resultado.innerText = "Ganaste un premio"
    }else{
        resultado.innerText = "Sigue participando"
    }

}

    








