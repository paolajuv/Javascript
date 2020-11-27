function Eventlistener(){
    document.getElementById("num").addEventListener("click", imprimirnumeros());

}

function imprimirnumeros(){
    var num = document.getElementById("ImprimirLista");

    for(var x=1; x<=20; x++){
     var numero = document.createElement("li");
     numero.setAttribute("class", "list-group-item");
     numero.innerText = x;
     num.appendChild(numero);
    }
     
}