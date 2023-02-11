/* 
Los arreglos o arrays son lo que se conoce como objeto global dentro de Javascript, 
y que nos permiten guardar y gestionar información. 
Esto nos será de gran utilidad cuando queramos almacenar datos. 

Podemos pensar en los arrays como si fuesen listas, en ellas tenemos distintas posiciones para guardar y 
organizar la información. 

Dentro de los arreglos existen dos conceptos que pueden parecer similares, 
pero son muy diferentes.

1.Por un lado tenemos lo que se conoce como *elemento*. 
Los elementos son aquellos datos que hayamos guardado. 
Ejemplo:
lista: [tomates, lechuga, zanahoria]
Guardamos 3 elementos en esta lista: tomates, lechuga, zanahoria. 
 	
2. Por otro lado, está el concepto de índice. Los índices no representan al dato en sí mismo, 
sino la posición en la que se está guardando. Un detalle muy importante que hay que destacar es que, 
en los arreglos, siempre se comienza a contabilizar las posiciones desde el número cero, no el uno.
Ejemplo: 
lista: [tomates, lechuga, zanahoria]
posicion: 0, 1, 2
*/

let listaDeCompras = [];

// Lista de compras
listaDeCompras[3] = 'Tomates';
listaDeCompras[1] = 'Lechuga';
console.log(listaDeCompras);

// Ver lista de compras
let elementoDelArray = listaDeCompras[1];
console.log(elementoDelArray);

// Lenght -> Nos permite saber cuantos elementos tiene un arreglo, es decir cual es su extención
let nombres = ['Matias', 'Maria', 'Diego', 'Rosa'].length;
console.log(nombres);

/* Blucles */

/* eL bucle FOR trabaja con un número determinado de repeticiones
el bucle WHILE trabaja con condiciones */

let arr = [1, 2, 3, 4, 5];

for(var i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

function encontrarLetraP(string){
    var letras = string.split('');
    
    for(let i = 0; i < letras.length; i++){
        if(letras[i] === 'P') {
            return true;
        }
    }
}

encontrarLetraP('Peter');
encontrarLetraP('Henry');

var array = [];

while(array.length < 5){
    array.push('BOOM');
}

console.log(array);
