function EventListener(){
    document.getElementById("calcular").addEventListener("click", calcalificaciones().value);
}

function calcalificaciones(){
    var cal = String(document.getElementById("calificacion").value);
    var imprcal = document.getElementById("resultado");

    if(cal == "10"){
        imprcal.innerText = "Corresponde a la letra A";
    }

    else if(cal == "9"){
        imprcal.innerText = "Corresponde a la letra B"
    }

    else if(cal == "8"){
        imprcal.innerText = "Corresponde a la letra C"
    }

    else if (cal == "7"){
        imprcal.innerText = "Corresponde a la letra D"
    }

    else if(cal == "6"){
        imprcal.innerText = "Corresponde a la letra D"
    }

    else if(cal == "5"){
        imprcal.innerText = "Corresponde a la letra F"
    }

    else if(cal == "4"){
        imprcal.innerText = "Corresponde a la letra F"
    }

    else if(cal == "3"){
        imprcal.innerText = "Corresponde a la letra F"
    }

    else if(cal == "2"){
        imprcal.innerText = "Corresponde a la letra F"
    }

    else if(cal == "1"){
        imprcal.innerText = "Corresponde a la letra F"
    }

    else if(cal == "0"){
        imprcal.innerText = "Corresponde a la letra F"
    }
}

