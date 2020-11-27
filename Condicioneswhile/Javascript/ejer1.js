function EventListener(){
    document.getElementById("boton").addEventListener("click", numeroMayorMenor());
}

function numeroMayorMenor(){
    var imprimir = document.getElementById("imprimir");
    var Nnum = prompt("¿Cuántos numeros vas a ingresar?");
    var contador =0;  contadorneg = 0;
    var contador2 = 1; contadorneg2 =1;
    var  x=0;
    while(x<Nnum){
        var numero = prompt("Ingresa un número");
        if(numero >= 0){
            contador = contador + contador2;
        }else{
            contadorneg = contadorneg + contadorneg2;
        }

       imprimir.innerText = "Los numeros mayores o iguales a 0 son:"+" "+contador+" "+"Los numeros menores son"+" "+contadorneg;
        x++;
    }



}