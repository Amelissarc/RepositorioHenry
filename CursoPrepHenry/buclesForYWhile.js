/* Blucles o ciclos de iteración:
Permiten realizar acciones que son de caácter repetitivo de manera sencilla ahorrandonos lineas de codigo.
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
*/

for (let i = 0; i < 5; i++) {
    suma = suma + i;
    console.log('Variable de iteración: ', i);
 }
 console.log('Variable suma: ', suma); // 10 
 // cilo        1 2 3 4 6
 // V iteración 0 1 2 3 4
 // V suma      0 1 3 6 10

 /* 
Bucle while
El Bucle While es usado cuando no tenemos la certeza de cuántos pasos vamos a necesitar hasta finalizar la ejecución. 
Por ejemplo, podríamos pensar en una función que siga agregando +1 hasta llegar a un número determinado. 
 */

while(sumar < 3) {
    sumar = sumar + 1;
        console.log(sumar);
    };