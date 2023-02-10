/* 
Como el nombre lo indica, refiere a la verdad de algo. Es decir, si es verdadero o falso.

Como ya sabemos, dentro de JavaScript existe un tipo de dato booleano que toma estos dos valores. 
Y como cualquier otro lenguaje, su forma de procesar lógica se basa en un sistema binario. Unos y ceros. Verdaderos y falsos. 
Es por esto que absolutamente todos los datos dentro de este lenguaje pueden ser resumidos a estos dos valores. 
*/
      
function boolean() {
    console.log();
}

boolean(1); // true
boolean(0); // false
boolean(-1); // true
boolean(true); // true
boolean(false); // false
boolean('string'); // true
boolean(null); // false
boolean(undefined); // false
boolean([]);  // true
