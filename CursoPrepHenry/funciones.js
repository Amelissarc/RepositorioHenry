/* Las funciones son bloques de código que podemos ejecutar y nos etornará algún valor como resultado.
Si no definimos nosotros el valor, por defecto JS nos dara el valor Undefined. 

Los parámetros son palabras clave que nos permiten introducir información externa dentro de una función. 
Una función puede recibir uno o más parámetros. */

//Un ejemplo en matematicas seria:
// f(x) = x + 3 
// x = 5 
// Rta = 8

//Misma función pero en codigo: 
function sumarTres(x) {
    console.log(x + 3);
}

sumarTres(5); // 8

// Sintaxis de una función:
/* La palabra reservada nos indica que lo siguiente sera un función 
dentro del parentesis escribiremos el argumento o parámetro; que nos sirve para darle información a nuestra función
abrimos llaves, que sera nuestro "cuerpo de la función" acá se indican las instrucciones de la función */

// Maneras de declarar la función:

//PRIMERO  -> función común
function sumaTres(x) {
    return x + 3;
}

//SEGUNDO -> guardar función dentro de una variable
var sumaTres = function (x) {
    return x + 3;
};

//TERCERO -> función de flecha 
var sumarTres = (x) => {
    return x + 3;
};


// Error común -> Confundir console.log con return

//console.log -> Nos ayuda a visualizar en la consola el resultado, nos ayuda a nosotros a visualizarlo en el momento de estar probando luego hay que eliminarlo
//return -> se usa en la programación es fundamental que este en nuestro codigo -> Retorna como string 

//Función: cuidadoConElConsoleLog

function cuidadoConElConsoleLog(nombre) {
    console.log(nombre);  
    return nombre; turn
} // ->  En consola veremos primero el console.log y luego el string del re

function otraFuncion() {
    return (
        "El nombre retornado por la funcion 'cuidadoConElConsoleLog' es: " + 
        cuidadoConElConsoleLog('Camilo')
    );
}

function cuidadoConElReturn(nombre) {
    return nombre;   
    console.log(nombre);
} // -> El return hace terminar la ejecución no mostrara el console.log


// Para para probar los return llamamos la función y colocamos un valor ejemplo cuidadoConElReturn("Camilo")  ---> 'Camilo'

//Precedencia de valores
let a = 1;
let b = 2;
let c = a = b;
console.log (c); 