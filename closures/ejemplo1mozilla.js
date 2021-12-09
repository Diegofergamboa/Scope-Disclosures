function creaFuncion () {
    var nombre = 'Diego';
    function mostrarNombre () {
        console.log(nombre);
    }
    return mostrarNombre;
}

let myfFunction = creaFuncion();
myfFunction();