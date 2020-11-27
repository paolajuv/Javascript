function EventListener(){
    document.getElementById("boton").addEventListener("click", numeromayor());
    document.getElementById("boton2").addEventListener("click",numeromayor2());
}

function numeromayor(){
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var imprimir = document.getElementById("imprimir");

    if(num1 > num2){
        imprimir.innerText = "Número 1 es mayor"
    }else{
        imprimir.innerText = "Número 2 es mayor"
    }

}

function numeromayor2(){
    var num3 = Number(document.getElementById("num3").value);
    var num4 = Number(document.getElementById("num4").value);
    var imprimir = document.getElementById("imprimir2");

    if(num3 > num4){
        imprimir.innerText = "Número 1 es mayor"
    }else if(num3 == num4){
        imprimir.innerText ="Los dos numeros son iguales"
    }else{
        imprimir.innerText = "Número 2 es mayor"
    }



}