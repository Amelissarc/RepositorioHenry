/* La precedencia de operadores determina el orden en el cual los operadores son evaluados uno respecto del otro. 
Los operadores con mayor precedencia se convierten en los operandos de los operadores con menor precedencia. 
 */
//Suma
console.log(3 + 5);

//Resta
console.log(14 - 7);

//Multiplicacion
console.log(8 * 6);

//Division
console.log(30 / 9);

//Resto
console.log(95 % 4);

//Prueba de precedencia
console.log(3 + 5 * 2 - 8);
// la multiplicación es más importante que la suma (5*2)=10 3+10-8 =5

// Con los parentesis podremos dar mayor procedencia 
console.log((3 + 5) * 2 - 8);
//Al utilizar parentesis sumara (3+5)= 8  8*2=16-8 => 8


// Adición y Strings
/* Los operadores no solo van a aplicarse a números. Por ejemplo,
El operador de adición nos va a permitie concatenar strings */
console.log('Hola ' + 'Camilo ');

// utilizando variables:
let nombre = 'Camilo ';
let saludo = 'Hola ' + nombre;
console.log(saludo);

/* Anteriormente conocimos los operadores básicos y su precedencia, 
ahora nos enfocaremos en los operadores de comparación: 
mayor que (>), menor que (<), mayor o igual (>=), menor o igual (<=), 
igual == (se representa con doble igual)  y distinto de (!=). */

//Operaciones de comparación
console.log (4 < 7); //menor que (<) -> true
console.log (4 < 1 ); //menor que (<) -> false
console.log (4 > 4); //mayor que (>) ->false
console.log (4 == 7); //igual == ->false

//Igualdad vs igualdad estricta 

//Igualdades 

/* === estricta ; verifica que el tipo de dato y valor sean iguales.
== gualdad ; verifica unicamente que los valores sean iguales.

Abstract equality comparison -> ejecuta seria predefinida de pasos que permite comparar valores */
console.log (3 == 3); // true
console.log (3 === 3); // true
console.log (3 == "3"); // true
console.log (3 === "3"); // false
console.log (7 == "7"); // true
console.log (7 === "7"); // false

//Asignación y asociatividad
/* Nos permite identificar que operación se ejecuta primero
Se empieza a operar de derecha a izquierda */
let a = 1;
let b = 2;
console.log(a = b); // 2
console.log(b); // 2

let c = a = b;
console.log (c); // 2

console.log(16 / 2 / 4);  // 16/2 = 8  8/4=2  --> 2