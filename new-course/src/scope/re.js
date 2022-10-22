var firstName;
firstName = 'Diego';
console.log(firstName);

var lastName = 'Fernando';
lastName = 'Ortiz';
console.log(lastName);

var secondName = 'segundo nombre';
var secondName = 'reasignación';
console.log(secondName);

// Ejemplo con let.

let variable = 'valor de variable';
variable = 'valor de reasignación de variable';
console.log(variable);
// let variable = 'intento de reasignación' //* No se debería intentar hacer reasignaciones de nuevo con variables.

// Ejemplo con const.

const animal = 'dog'; // declaración y asignación
// animal = 'gatito'; No se permiten realizar asignaciones sobre variables de tipo constante, porque en teoria no va a cambiar a lo largo del tiempo.
//* No se pueden hacer redeclaraciones dentro del mismo block scope.
//! Cuando se agregan valores a la referencia se juega con la mutabilidad e inmutabilidad del lenguaje.

const vehicles = [];
console.log(vehicles);
vehicles.push('primer vehiculo');
console.log(vehicles);
vehicles.pop();
console.log(vehicles);
