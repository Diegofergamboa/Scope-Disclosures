//! Variables.

let var1 ; // Aqui estoy haciendo una declaración de variable.
let var2 = 'valor' // Aqui estoy haciendo una declaración y asignación de valor en una variable.


var1 = 'otro valor para var1' // Cómo aquí se está haciendo la asignación de valor de una función esto sería una //!REDECLARACIÓN.
var2 = 'otro valor para var2' // Cómo aquí se está haciendo la asignación a una variable que ya tenía un valor asignado, se conoce como //! REDECLARACIÓN.


//! Global Scope

var a = 'valor de variable a'; // Aqui se está declarando y asignando una variable LOCAL.

function callA() {
    console.log(a); // hace referencia al ambiente global de desarrollo.
};

callA();


function callB() {
    c = 'valor de variable c' // Si la colocara con un let o const, si funcionaría mejor porque es un scope local.
}

callB(); // Al hacer esto, estoy realizando una variable asignandola al ámbito global
console.log(c);