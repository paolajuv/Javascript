function EventListener(){
    //instruccion solo de boton de html y esta atento cuando le damos click a calcular
    document.getElementById("CalcularNumeros").addEventListener("click" , Calificaciones())
}

function Calificaciones(){
    var Calificacion1 = Number(document.getElementById("Calificacion1").value);
    var Calificacion2 = Number(document.getElementById("Calificacion2").value);
    var Calificacion3 = Number(document.getElementById("Calificacion3").value);
    var Calificacion4 = Number(document.getElementById("Calificacion4").value);

    var valorminimo = 0;
    var promedio = 0;

//math es matematicas y min es minimo y juntos son para obtener el valor minimo de una serie de numeros 
if(Calificacion1 < Calificacion2 && Calificacion1 < Calificacion3 && Calificacion1 < Calificacion4){
    valorminimo = Math.min(Calificacion1, Calificacion2, Calificacion3, Calificacion4);
    promedio = (Calificacion2 + Calificacion3 + Calificacion4) / 3;
    NumeroMinimo.innerText = "La Calificacion minima es:" + " " + calificacionminima;
    Promedio.innerText = "El promedio de las notas mas altas son:" + " " + promedio;
}
if(Calificacion2 < Calificacion1 && Calificacion2 < Calificacion3 && Calificacion2 < Calificacion4){
    valorminimo = Math.min(Calificacion1, Calificacion2, Calificacion3, Calificacion4);
    promedio = (Calificacion2 + Calificacion3 + Calificacion4) / 3;
    NumeroMinimo.innerText = "La Calificacion minima es:" + " " + calificacionminima;
    Promedio.innerText = "El promedio de las notas mas altas son:" + " " + promedio;
}
if(Calificacion3 < Calificacion1 && Calificacion3 < Calificacion2 && Calificacion3 < Calificacion4){
    valorminimo = Math.min(Calificacion1, Calificacion2, Calificacion3, Calificacion4);
    promedio = (Calificacion2 + Calificacion3 + Calificacion4) / 3;
    NumeroMinimo.innerText = "La Calificacion minima es:" + " " + calificacionminima;
    Promedio.innerText = "El promedio de las notas mas altas son:" + " " + promedio;
}
if(Calificacion4 < Calificacion1 && Calificacion4 < Calificacion3 && Calificacion4 < Calificacion3){
    valorminimo = Math.min(Calificacion1, Calificacion2, Calificacion3, Calificacion4);
    promedio = (Calificacion2 + Calificacion3 + Calificacion4) / 3;
    NumeroMinimo.innerText = "La Calificacion minima es:" + " " + calificacionminima;
    Promedio.innerText = "El promedio de las notas mas altas son:" + " " + promedio;
}    
}

