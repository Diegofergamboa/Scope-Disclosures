'use strict';

// Tal como se puede ver en este ejemplo, cuando se usa el use strict, 
//no le permite al algoritmo, realizar algunas particularidades que terminan siendo malas prácticas.

// asignación incorrecta de un valor a global scope
function badAssigned() {
    return pi = 15.13;
};
// Dirá que la función no está ejecutada por defecto, lo cual es bastante bueno ya que no nos permite realizar malas prácticas
console.log(badAssigned());

// Práctica incorrecta corregida con el uso de 'use strict mode';
pan = 'pan';
console.log(pan)
