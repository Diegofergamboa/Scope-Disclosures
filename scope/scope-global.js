const { arrow } = require("@popperjs/core");

// ! Las variables que son de scope local basicamente se pueden llamar desde cualquier ámbito
var hello = 'hello';

function fun() {
    console.log(hello);
}
fun();
console.log(hello);

var car = 'Mercedes Benz';

function showCar() {
    console.log(`Tu carro es un ${car}`);
}

showCar();
console.log(car);

// ! Las variables que son de tipo let y const no pueden tener reasignaciones de valor mientras que var si.
// ! De hecho, esa es la particularidad por la cuál no estan buena práctica usar "var" en vez de let y const, para no sobre-asignar valores.

const anotherFunction = () => {
    var hi = 'hi'
    let hello = 'hello';
    const arrow = 'arrow'
}

anotherFunction()
console.log(hi);
// console.log(hello);
// console.log(arrow);

// ! Asignar valores a funciones fantasma dentro de funciones es una mala práctica
// ! Generar dobles asignaciones como al siguiente

const anotherFunction = () => {
    hi = hello = 'hola';
}


