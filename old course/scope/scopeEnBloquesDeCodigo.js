//! Scope dentor de bloques de código.

//* Se define bloue de código a todo lo que esté asignado dentro de llaves.

{
    const x = 12;
    console.log(x);
}

//! Caso donde están realizadas las declaraciones de la funciones con variable (Caso de ámbito léxico)

const fruits = () => {
    if (true) {
        var fruit1 = 'Apple';
        let fruit2 = 'Orange';
        const fruit3 = 'Pineapple';
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();



