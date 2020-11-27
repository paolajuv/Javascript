function EventListener(){
    document.getElementById("boton").addEventListener("click", multiplos5());
    document.getElementById("boton2").addEventListener("click", multiplis5if());
}

function multiplos5(){
    var listado = document.getElementById("listado");
    listado.innerText = "";
     for(var x=50; x>=5; x--){
        var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText = x;
        listado.appendChild(lista);
    }
}

function multiplis5if(){
    var listado = document.getElementById("listado2");
    listado.innerText = "";

    for(var x=50; x>=5; x--){
        if(x % 3 == 0){
            var lista = document.createElement("li");
            lista.setAttribute("class", "list-group-item");
            lista.innerText = x;
            listado.appendChild(lista);
           }
    }
       
}