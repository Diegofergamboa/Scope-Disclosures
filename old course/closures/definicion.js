//! Closure Mozilla.

function iniciar () {
    var nombre = 'Diego'; // La variable es una variable del contexto local pero iniciada por el contexto actual.
    function mostrarNombre() { // la función es una clausura
        console.log(nombre); // Aqui cumplimos con que para que sea una clausura debe usar una variable de un ámbito adyacente.
    }
}