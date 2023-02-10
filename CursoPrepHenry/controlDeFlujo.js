/* Códico condicional
En un ejemplo secillo un día caluroso vamos a querer comprar un helado y un día frio un café; acá nuestro condicional sería la Temperatura.

Operadores condicionales:

Permiten que se cumplan unas u otras instrucciones dependiento de alguna condición.
*/


// If  
/* Nos indica que acontinuación tendremos un condicional, 
Luego vienen los parentesis donde colocamos nuestra condición que se resumira en una comparación booleana
Si la condición es (true) -> se ejecuta el cuerpo del condicional 
caso contrario (false) -> se saltea el codigo y js continua con la ejecución del código siguiente.*/

//Else 
/* Nos permite avisarle a nuestro codigo que hay una condición más 
usaremos else if --> si es más de una condición diferente de no ser así el else será suficiente 
Esta nos sirve para anidar condicionales*/

function viajar(destino) {
    if(destino === 'Brasil') {  
            console.log('Gire a la izquierda');
        }else if(destino === 'Argentina') {
            console.log('Gire a la derecha');
        } else {
            console.log('Nos perdimos');''
    }
};

viajar('Brasil');
viajar('Argentina');
viajar('Peru'); 

/* También podemos usar otros comparadores de comparación  */

function puedeManejar(edad) {
    if(edad >= 18) {
        console.log( true );
    } 
    console.log( false ); // Else
}  
puedeManejar(17);