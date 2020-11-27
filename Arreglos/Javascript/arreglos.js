function MetodosdeArreglos(){

    var ArreglosNumeros = [ 1,4,5,7,8,9,5,4];
    var Arreglo2 = [2,5,6,7,0];
    var Arreglo3 = [1,2,3,4,5,11,33,22,28,6,55,44,111];
    var Arreglo4 = ["Manzana", "Pera", "Mesa", "pared", "ropero", "raton"];

//Agrega el número al final del arreglo y además cuenta cuantos valores son el total despues de agregar el número

    console.log(ArreglosNumeros.push(5));

//Imprime todos los valores del arreglo
    console.log(ArreglosNumeros.slice());

    //agregar el numero al inicio del arreglo y ademas cuabnta cuantos numeros son el total despues de que agrego
    //el ultimo numero
    console.log(Arreglo2.unshift(9));

    //imprime todos los valores del arreglo
    console.log(Arreglo2.slice());

    //imprime el arreglo final
    console.log(Arreglo3);

    //imprime los
    console.log(Arreglo.sort());
    
    console.log(Arreglo4.sort());
}
