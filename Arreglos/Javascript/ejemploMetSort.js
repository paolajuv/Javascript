function EventListener(){
    document.getElementsById("btnordenar").addEventListener("click", Ordenarnumeros());

}

function Ordenarnumeros(){

    var ArregloNumero = [1,4,2,9,11,44,111,7,4];
    var imprimirmenormayor = document.getElementsById("imprimirmenormayor");
    var imprimirmayormenor = document.getElementsById("imprimirmayormenor");

    //ordenar alfabeticamente los numeros;
    ArregloNumero.sort();
    //creo una funcion en el metodo sort para poder ordenar los numeros numericamente de menor a mayor
    imprimirmenormayor.innerText = ArregloNumero.sort(MenorAMyor); //1,2,4,4,7,9,11,111
    //creo una funcion en el metodo sort para poder ordenar los numeros numericamente de mayor a menor
    imprimirmayormenor.innerText = ArregloNumero.sort(MayorAMenor);

}
//funcion que me permite ordenar de menor a mayor el arreglo
function MenorAMyor(elem1, elem2){
    return elem1 - elem2;
    //1-4, 1-2, 1-9,
    //4-2,
    //4-9, 4-11
}

function MayorAMenor(elem1,elem2){
    return elem2 - elem1; //else if(elem2 > elem1);
}