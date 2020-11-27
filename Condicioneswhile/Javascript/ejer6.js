function EventListener(){
    document.getElementById("ciclo1-16").addEventListener("click", imprciclo());
}

function imprciclo(){
    var imprnum = document.getElementById("listado");
    imprnum.innerText = "";

    var x = 1;

    while(x<=16){
        var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item mt-2");
        lista.innerText = x;
        imprnum.appendChild(lista);
        x+=3;
    }
}