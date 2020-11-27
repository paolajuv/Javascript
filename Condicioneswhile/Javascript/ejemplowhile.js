function EventListener(){
    document.getElementById("btncalcular").addEventListener("click", Calcularfrase());
}

function Calcularfrase(){

    var salida1 = document.getElementById("imprimirfrase");

    var x = 0;

    while(x  < 10){
        var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText = "Hola Mundo";
        salida1.appendChild(lista);

    x++
    }
}