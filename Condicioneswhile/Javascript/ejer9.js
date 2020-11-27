function EventListener(){
    document.getElementById("boton").addEventListener("click", multiplos5());
}

function multiplos5(){
    var listado = document.getElementById("listado");
    listado.innerText = "";

    var x = 5;
     while(x<=50){
        var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText = x;
        listado.appendChild(lista);
        x+=5;
    }
}