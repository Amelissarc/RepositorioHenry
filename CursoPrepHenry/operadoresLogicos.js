/* Las expresiones se evalúan en orden, y la computadora omitirá cualquier expresión redundante. 
En una declaración &&, si la primera expresión es false, la segunda expresión no se evaluará porque AMBAS expresiones deben ser true. 

Conjunción --> &&	and	(5 < 2) && (5 > 3)	false
Las expresiones se evalúan en orden, y la computadora omitirá cualquier expresión redundante. En una declaración &&, 
si la primera expresión es false, la segunda expresión no se evaluará porque AMBAS expresiones deben ser true. 

Disyunción --> ||	or	(5 < 2) || (5 >3) true
Lo mismo para la declaración ||. Si la primera expresión es verdadero, la segunda no se evaluará porque solo debe haber una declaración verdadera para cumplir con los requisitos del operador. 

Negación --> !	not	! (5 < 2)	true  
Utiliza paréntesis. Como vimos en el segundo ejemplo de la negación !, utilizamos paréntesis para evaluar PRIMERO lo que estaba dentro de ellos, y luego aplicamos la negación. Podemos ajustar cualquier expresión entre paréntesis y se evaluará antes que toda la expresión en conjunto.
*/

/* Recordemos un poco los condicionales
Estos nos permiten controlar el flujo de nuestro código
Ejemplo cotidiano; "Si está lloviendo, entonces me voy a quedar acostado en mi cama mirando series"
Si llueve, ejecuto la acción

Pero ... Y si queremos complejizarla 
Ejemplo; ""Si está lloviendo y hace frío, entonces me voy a quedar acostado en mi cama mirando series"
*/

// (AND &&) Conjunción --> nos permite juntar condiciones para que todas se cumplan en simultaneo 
function mayorYMenor(num) {
    if(num > 5 && num < 10 ) console.log(true);
    else console.log(false);
};

mayorYMenor(2);
mayorYMenor(7);

function mayorYMenorYPar(num) {
	if( num > 5 && num < 10  && num % 2 === 0 ) console.log(true);
	else console.log(false);
};
mayorYMenorYPar(7);
mayorYMenorYPar(8); 

// (OR ||)  Disyunción -->  aceptará que solo se cumpla una de las condiciones propuestas 
function operadorOr(str) {
    if (str === 'Henry' || str.length < 2) console.log(true);
    else console.log(false);
 }
 operadorOr('Henry');
 operadorOr('Javascript');
 operadorOr('H');

 // (NOT) Negación --> trasnformará un valor en su opuesto.
function negacion(permiso) {
    if (permiso !== true) console.log('Tiene permiso');
 }
 negacion(true);
 negacion(false);


 /* Podemos combinarlos y volverlas más complejas */

 function condicionCompleja(num) {
    // Pregunta si el número recibido es mayor que 9
    // El numero es exactamente divisible por 2 o si es igual a 3
    if(num > 9 && num % 2 === 0 || num === 3) console.log(true);
    else console.log(false);
 }

 condicionCompleja(10);
 condicionCompleja(3);
 condicionCompleja(6);
 condicionCompleja(5);

 /* El operador OR ||  precede al operador AND  && */