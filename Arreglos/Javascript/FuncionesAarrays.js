function ArreglosJavascript(){
    //declaro una variable con la palabra reservada new array con un cuadro de 7 posiciones
    var DiasSemana = new Array(7);

    //llenar la informacion en el arreglo con los indices que comienza con 0
    DiasSemana[0] = "Lunes";
    DiasSemana[0] = "Martes";
    DiasSemana[0] = "Miercoles";
    DiasSemana[0] = "Jueves";
    DiasSemana[0] = "Viernes";
    DiasSemana[0] = "Sabado";
    DiasSemana[0] = "Domingo";

    //imprimir la informacion del arreglo
    console.log(DiasSemana);
    console.log(DiasSemana[4]);
    console.log(DiasSemana[0], DiasSemana[1], DiasSemana[2], DiasSemana[3], DiasSemana[4],
        DiasSemana[5], DiasSemana[6]);

    //segunda forma de declarar un arreglo
       var Semanas = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
       
       //imprimir el arreglo
       console.log(Semanas);
       //imprimir un dia de la semana con su indice
       console.log(Semana[4]);
       //imprimir todos los dias de la semana con su indice
       console.log(Semanas[0], Semanas[1], Semanas[2], Semanas[3], Semanas[4], Semanas[5], Semanas[6]);




}