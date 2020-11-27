function EventListener(){
    document.getElementById("boton").addEventListener("click", añobi());
}

function añobi(){
     var año = Number(document.getElementById("año").value);
     var imprimir = document.getElementById("imprimir");
     
     if(año % 4 == 0 && año % 100 !=0 || año % 400 == 0){
         imprimir.innerText = año +" "+ "es bisiesto";
        }else{
            imprimir.innerText = año+" "+"no es bisiesto"
        }

}