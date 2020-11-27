function Eventlistener(){
    document.getElementById("pares").addEventListener("click", imprimirpares());
}

function imprimirpares(){
    var numpar = document.getElementById("listas");

    for(var x=0; x <=100; x+=2){
        var par = document.createElement("li");
        par.setAttribute("class", "list-group-item");
        par.innerText = x;
        numpar.appendChild(par);}
    }