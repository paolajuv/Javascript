function EventListener(){
    document.getElementById("boton").addEventListener("click", imprparyprom());
}

function imprparyprom(){
    
    var imprimirpromedio = document.getElementById("impr1");
    var imprimirsuma = document.getElementById("impr2");
    var contador1 = 0, contador2 = 0, sumapares=0, promedio=0, sumaimpares=0;
    var x=1;

    while(x<=10){
        var introduce = Number(prompt("Ingresa un número"));
        if(introduce > 0 && introduce % 2 == 0){
            contador1++;
            sumapares = introduce +sumapares;
            promedio = sumapares / contador1;
        }else{
            contador2++;
            sumaimpares = introduce + sumaimpares;
        }
        imprimirpromedio.innerText = "El promedio de los numeros pares es " + promedio;
        imprimirsuma.innerText = "La suma de los numeros impares es" + sumaimpares;
       x++;
    }
    
  
}