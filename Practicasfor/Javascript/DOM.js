function EventListener(){
    //mandar llamar al boton1
    document.getElementById("click").addEventListener("click", Darleclick());
    //mandar llamar al boton2
    document.getElementById("click2").addEventListener("click", Darleclick2());
}
//la funcion primer boton
function Darleclick(){

    var salida = document.getElementById("salida1");
//document.createElement se utiliza para crear una etiquta desde javascript
    var button = document.createElement("button");
    //La instruccion ser attribute llamamos a la clase para darle forma al boton
    button.setAttribute("class", "btn btn-primary btn-lg btn-block");
    // se utiliza para imprimir informacion en la etiqueta(boton);
    button.setAttribute("id", "boton"); // = id = "Boton"
    button.setAttribute("type", "button"); // = type = "button"
    button.innerText = "Boton Impreso";

    salida.appendChild(button);
}

// la funcio del segundo boton
function Darleclick2(){
    var salida2 = document.getElementById("salida2");

    //declarar una variable con un 0, imprimir un boton hasta 5 veces;
    for(var x=0; x<5; x++){
        var button = document.createElement("button");
        button.setAttribute("class", "btn btn-primary btn-lg btn-block mt-2");
        button.setAttribute("id", "button");
        button.setAttribute("type", "button");
        button.innerText = "Varios botones impresos";

        salida2.appendChild(button);
  }

}

function Darleclick3(){
    var listado = document.createElement("li");

    for(var x=0; x5; x++){
        var lista = document.createElement("li");//<li></li>
        lista.setAttribute("class", "list-group-item");//<li class="list-group-item active"></li>
        lista.innerText = x;
        listado.appendChild(lista);
    }

}










