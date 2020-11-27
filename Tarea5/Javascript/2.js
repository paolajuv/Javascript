function Eventlistener(){
    document.getElementById("Numeros").addEventListener("click", Imprimirnumeros());
}

function Imprimirnumeros(){
    var numero = document.getElementById("imprimirlista");

    for(var x=1; x<=16; x+=3){
        var par = document.createElement("li");
        par.setAttribute("class", "list-group-item mt-2");
        par.innerText = x;
        numero.appendChild(par);
    }
}