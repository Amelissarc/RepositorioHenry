/* 
Los arreglos, además de ser un tipo de dato, también son un objeto global dentro de JavaScript. 
Esto significa que todos los arreglos están asociados a una serie de métodos. 

Los métodos son funciones nativas o preestablecidas en los lenguajes de programación. 
Métodos más utilizados:
*/

// Métodos de inserción

/* 1. El método push() añade uno o más elementos al final de un arreglo, 
y devuelve la nueva longitud del array. */
var colores = ['amarillo', 'azul'];
colores.push('verde');
console.log(colores); // [ 'amarillo', 'azul', 'verde' ]

/* 2. El método pop() elimina y devuelve el último elemento de un arreglo. */
var colores = ['amarillo', 'azul'];
colores.pop();
console.log(colores); // [ 'amarillo' ]

/* 3. El método unshift() agrega uno o más elementos al inicio de un arreglo, 
y devuelve la nueva longitud del array. */
var colores = ['amarillo', 'azul'];
colores.unshift('verde');
console.log(colores); // [ 'verde', 'amarillo', 'azul' ]


/* 4. El método shift() elimina y devuelve el primer elemento de un arreglo. */
var colores = ['amarillo', 'azul'];
colores.shift();
console.log(colores); // [ 'azul' ]

/* 5. El método slice() devuelve un nuevo arreglo con los elementos del inicio hasta el final. */
var colores = ['amarillo', 'azul'];
colores.slice(1, 3);
console.log(colores);  // [ 'amarillo', 'azul' ]

//Métodos varios:

/* 1. El método includes() determina si un arreglo incluye o contiene un elemento específico. 
Devuelve true o false en cada caso. */
let pintores = ['Picasso', 'Velazquez', 'Van Gogh', 'Dali'];
let includes = pintores.includes('Picasso');
console.log(includes);  // true

/* 2. El método every() determina si todos los elementos en un arreglo satisfacen una misma condición. */
let numeros = [1, 6, 8, 9];
let cumplenCondicion = numeros.every((num) => {
    return num > 5;
});
console.log(cumplenCondicion);  // false

/* 3. El método split() convierte un string en un arreglo, donde cada elemento contendrá un sub-string, 
dependiendo del parámetro divisor que indiquemos. */
let palabra = 'Henri';
let palabraSeparada = palabra.split(' ');
palabraSeparada.pop(); // elimina el último elemento del arreglo
palabraSeparada.push('y'); // agrega un elemento al final del arreglo
// console.log(palabraSeparada);  // [ 'H', 'e', 'n', 'r', 'i' ]

/* 4. El método join() convierte un arreglo en un string, 
uniendo todos los elementos de este en una misma cadena. */
let palabraArreglada = palabraSeparada.join(' '); // convierte el arreglo a string
console.log(palabraArreglada);  // 'Henry'

// Métodos de recorrido:

/* 1. El método forEach() nos permite recorrer un arreglo, realizando alguna acción en para cada elemento.*/
let numeroS = [1, 2, 3, 4];
// numeroS.forEach((num) => console.log(num)); // 1 2 3 4 5
numeroS.forEach((num) => {
    if (num === 3) {
        console.log(num); //
    }
});

/* 2. El método map() también nos permite recorrer un arreglo y realizar una acción por cada elemento. La diferencia es que este método devuelve un nuevo arreglo los elementos modificados. */

let masUno = numeros.map((num) => {
    return num + 1;
});
console.log(masUno); // [ 2, 3, 4, 5 ]


