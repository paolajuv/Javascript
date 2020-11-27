function EventListener(){
    document.getElementById("boton").addEventListener("click", multiplo3());
}

function multiplo3(){

    var listado = document.getElementById("listado");
    listado.innerText = "";
    var x=50;
    while (x>=5) {
        if(x % 3 == 0){
            var lista = document.createElement("li");
            lista.setAttribute("class", "list-group-item");
            lista.innerText = x;
            listado.appendChild(lista);
           }
           x--;
    }

}