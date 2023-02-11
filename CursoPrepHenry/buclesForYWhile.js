/* Blucles o ciclos de iteración:
Permiten realizar acciones que son de carácter repetitivo de manera sencilla ahorrandonos lineas de codigo.
Son una secuanecia de instrucciones a la que se le asigna una condicion, se ejecuta hasta qque la condicion asiganada deje de cumplirse.

Ejemplo cotidiano:
lavar platos = 
1.Agarrar el plato sucio
2.Pasarle jabon
3.Mojarlo
4.Secarlo
Condición: Limpiar todos los platos.
*/

// Forma que no se debe hacer, seria muy extenso el código
let suma = 0;
let sumar = 0;
// suma = suma + 1;

// suma = suma + 2;
// suma = suma + 3;
// suma = suma + 4;
// console.log(suma)

/* 
Bucle For
Por un lado, el Bucle For es utilizado cuando sabemos con antelación la cantidad máxima exacta de pasos que queremos ejecutar. 
Esta cantidad máxima de pasos se sitúa como segundo parámetro entre los paréntesis.

Crea un bucle que consiste en tres expresiones opcionales, encerradas en paréntesis y separadas por puntos y comas, seguidas de una sentencia ejecutada en un bucle.

Sintaxis: for ([expresion-inicial]; [condicion]; [expresion-final])sentencia 
*/

for (let i = 0; i < 5; i++) {
    suma = suma + i;
    console.log('Variable de iteración: ', i);
 }
 console.log('Variable suma: ', suma); // 10 
 // cilo        1 2 3 4 6
 // V iteración 0 1 2 3 4
 // V suma      0 1 3 6 10

// FOR
var arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}

 /* 
Bucle while
El Bucle While es usado cuando no tenemos la certeza de cuántos pasos vamos a necesitar hasta finalizar la ejecución. 
Por ejemplo, podríamos pensar en una función que siga agregando +1 hasta llegar a un número determinado. 

Crea un bucle que ejecuta una sentencia especificada mientras cierta condición se evalúe como verdadera. Dicha condición es evaluada antes de ejecutar la sentencia.

Sintaxis: while (condicion)
  sentencia
 */

while(sumar < 3) {
    sumar = sumar + 1;
        console.log(sumar);
    };

// WHILE
var arr = [];
while (arr.length < 5) {
   arr.push('Camilo');
}
console.log(arr)

/* Bucle infinito

Esto no es un nuevo tipo de bucle, sino algo que se puede producir en los que ya aprendimos. Un bucle infinito se produce cuando un bucle comienza a ejecutarse, pero jamás termina. Esto se debe a que nunca se llega a la condición de quiebre.

Esto consume muchos recursos de la computadora, por lo que hay que intentar evitarlos.  */

var arr = []
var n = 1;

while (n < 3) {
    arr.push(Math.random());
}  // no debemos correr codigos así. 
