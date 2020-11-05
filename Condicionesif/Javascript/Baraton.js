function EventListener(){
    document.getElementById("descuento"); addEventListener("click", Porcentaje());
}

function Porcentaje(){

    var precio = Number(document.getElementById("precio").value);
    var imprimirdescuento = document.getElementById("descuentoagregado");
    var rebaja = 0;
    var preciofinal = 0;

 if(precio > 3600){
     preciofinal = precio * .84;
     rebaja = precio - preciofinal;
     imprimirdescuento.innerText = "El descuento va a ser del 16% por lo que producto va a tener un costo final de $" + preciofinal + "el descuento es" + rebaja;
}  else{
    preciofinal = precio * .97;
    rebaja = precio - preciofinal;
    imprimirdescuento.innerText ="El descuento va ser de 7%  por lo que el producto va tener un costo final de $" + preciofinal + "el descuento es" + rebaja;
} 
}