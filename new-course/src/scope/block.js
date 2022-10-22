//! Funcion en bloque.
//! Es una actualización de ECMAScript.

function fruits() {
    // Todo lo que tenga handle va a ser un bloque de código
    if (true) {
        var var1 = 1; // global scope
        let var2 = 2; // block scope
        const var3 = 3; // block scope
        console.log(var2);
        console.log(var3);
    }
    console.log(var1);
    
}
// No se debería usar las lógica de var para declarar variables porque como sobreescriben en el ámbito global, podrían hacer llamados que no se quieran en un futuro
fruits();