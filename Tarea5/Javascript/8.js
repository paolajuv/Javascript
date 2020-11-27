function EventListener(){
    document.getElementById("Calculo").addEventListener("click", Calcularoperaciones());
}

function Calcularoperaciones(){

    var imprimirconteo = document.getElementById("imprimirnumeros")
    var imprimirprom = document.getElementById("imprimirpromedio")
    var imprimirproall = document.getElementById("imprimirproall")
    var Nnumeros = Number(prompt("¿Cuantos números en total vas a ingresar?"));
    var contadorsum = 0, contadorprom = 0, contadora0 = 0, contadorprom2 = 0, contadorsum2 = 0
    var contador = 1

    for(var x=0; x < Nnumeros; x++){
        var numero = Number(prompt("Ingresa un número"));

        contadorsum2 = numero + contadorsum2;
        contadorprom2 = contadorsum2 / Nnumeros

        if(numero > 0){
            contadora0 = contadora0 + contador;
            contadorsum = numero + contadorsum;
            contadorprom = contadorsum / contadora0
        }
    }

    imprimirconteo.innerText = "Los números mayores a 0 fueron " + contadora0;
    console.log(contadorsum2)
    imprimirprom.innerText = "El promedio de los números positivos fue de " + contadorprom;
    imprimirproall.innerText = "El promedio de todos los números fue de " + contadorprom2;
}