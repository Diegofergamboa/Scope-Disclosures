//! El closure va de l mano con la definición de ámbito léxico y, hace referencia al acceso que tiene se tiene dentro una función a variable cuando es declarada atrás de su scope local.

function myFunction() {
    const var1 = 1;
    console.log(var1);

    function parent() {
        const var2 = 2;
        console.log(var1, var2);

        function child() {
            const var3 = 3;
            console.log(var1, var2, var3);
        }
        return child();
    }
    return parent();
};

myFunction();

//! Another example.

function callMyName() {
    const name = 'Diego';

    function greetingMyName() {
        return console.log(`
            hola ${name}
        `);
    };
    return greetingMyName();
};

callMyName();