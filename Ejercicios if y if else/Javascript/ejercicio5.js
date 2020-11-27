function EventListener(){
    document.getElementById("boton").addEventListener("click", valor());
}

function valor(){
    var num = Number(document.getElementById("numero").value);
    var imprimir = document.getElementById("imprimir");
     if(num > 0){
        num = (num*1);
         imprimir.innerText = "El valor absoluto es"+" "+num;
    }else{
        num = (num*-1)
        imprimir.innerText = "El valor absoluto es"+" "+num;
    }
}