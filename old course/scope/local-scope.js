const helloworld = () => {
    const hello = 'hello';
    console.log(hello);
}

helloworld();


//! Ejemplo del ámbito léxico, es decir que una variable va a ser diferente según el tipo de ámbito en el que sea declarado
var scope = 'i´m global';

const functionScope = () => {
    var scope = 'i´m local';
    function func() {
        return scope;
    }
    console.log(scope);
}
functionScope();
console.log(scope);

//! Scope dentro de bloques de código

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
