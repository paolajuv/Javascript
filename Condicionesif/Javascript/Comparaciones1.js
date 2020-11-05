//Quiere comparar si una persona es mayor de edad y si tiene la INE y si ya puede tomar o no

function EventListener(){
    //Obtiene el id del boton que esta en el html y va a estar atento cuando le de click al boton
     document.getElementById("CalcularEdad").addEventListener("click",CalcularEdad());
    }
function CalcularEdad()
{
   //Obtener el id del input, pero con el .value obtenemos lo que ingresamos en el input, ademas
   //el Number indica que tipo de variable es
   var edad = Number(document.getElementById("Edad").value);
   //Se declara 1 para indicar que tiene ine y 0 si no tiene ine
   var INE = Number(document.getElementById("INE").value);
   //Se declara una variable para imprimir la respuesta
   var imprimirmensaje = document.getElementById("ImprimirEdad");

 if( edad >= 18 && INE >= 1 ){
     console.log("Es mayor de edad y puede tomar");
     //InnerText se utiliza para mandar llamar el div del html para imprimir la informacion
     imprimirmensaje.innerText = "Es mayor  de edad, tiene su ine y puede tomar";
 }else if( edad>=18 && INE==0){  
    imprimirmensaje.innerText = "Es mayor de edad, no tiene ine y no puede tomar";
 }else if(edad<18 && INE==0){
     imprimirmensaje.innerText = "Es menor de edad, no tiene ine y no puede tomar";
}

}
