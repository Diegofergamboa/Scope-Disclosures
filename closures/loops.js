// * Ejemplo sobre crear un closure que no estamos controlando.
// * Entender como manejar ese tipo de problemas.

const anotherFunction = () => {
    for (var i = 0; i < 10; i ++) {
        setTimeout(() => {
            console.log(i);
        }, 2000)
    }
};
// Estabamos creando un problema  porque involuntariamente estabamos.
// era accediendo al closure.

anotherFunction();

