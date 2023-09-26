var nombre = prompt("Bienvenido/a al cuestionario sobre las olimpiadas\nEscribe tu nombre:");

var correcta = 0
var incorrecta = 0

var pre1 = prompt("1. ¿Cuándo se realizará la inauguración de las Olimpiadas?\nA. Lunes 02 de octubre \nB. Viernes 29 de setiembre \nC. Jueves 28 de setiembre ");
if(pre1 == "B"){
    pre1 = 1;
    correcta = correcta+1
}else if(pre1 == "A"){
    pre1 = 0;
    incorrecta = incorrecta + 1
}else if (pre1 == "C"){
    pre1 = 0;
    incorrecta = incorrecta + 1
}else{
    alert(nombre+", esa opción no vale, intenta nuevamente");
}

var pre2 = prompt("2 ¿De qué color es la prompoción de 2do de secundaria? \nA. Celeste o Turquesa \nB. Rojo \nC. Morado");
if(pre2 == "A"){
    pre2 = 1;
    correcta = correcta+1
}else if(pre2 == "B"){
    pre2 = 0;
    incorrecta = incorrecta + 1
}else if (pre2 == "C"){
    pre2 = 0;
    incorrecta = incorrecta + 1
}else{
    alert(nombre+", esa opción no vale, intenta nuevamente");
}

var pre3 = prompt("3. Nuevo deporte incluido este año \nA. Futsal femenino \nB. Balonmano \nC. Marcha atlética");
if(pre3 == "C"){
    pre3 = 1;
    correcta = correcta+1
}else if(pre3 == "B"){
    pre3 = 0;
    incorrecta = incorrecta + 1
}else if (pre3 == "A"){
    pre3 = 0;
    incorrecta = incorrecta + 1
}else{
    alert(nombre+", esa opción no vale, intenta nuevamente");
}
    
alert(nombre+ ", muy bien has concluido este cuetionario. \nConcluye para ver tus resultados")

var total = pre1 + pre2 + pre3

document.write(nombre+ " , LO HAS HECHO BIEN. El puntaje mayor es 3, conseguiste uno de: " +total)


