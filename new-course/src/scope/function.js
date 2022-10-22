//! Function scope

function saludo() {
    // Todas las funciones van a tener su propio alcance y, van a ser accesibles en su función y sus child anidaciones
    
    let userName = 'Nombre';
    console.log(userName)

    (userName === 'Nombre' ? console.log`hola ${userName}` : null);
};

saludo();
console.log(userName); // NO va a ser accesible porque solamente se puede acceder a través de la función.
// Cuando solo se puede accedeer a través de la variable, es un //!function scope.