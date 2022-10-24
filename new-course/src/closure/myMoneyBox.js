//! Ejemplo de closures.

function myMoneyBox() {
    let saveCoins = 0;

    function increaseCoins(coins) {
        saveCoins += coins;
        console.log(`Saved money is $${saveCoins}`);
    };
    return increaseCoins;
};

//! Otra instancia de la función de save Money para Diego.
const myMoneyBoxDiego = myMoneyBox();
//! Otra instancia de la función de save Money para Fernando.
const myMoneyBoxFernando = myMoneyBox();

myMoneyBoxDiego(10);
myMoneyBoxDiego(10);
myMoneyBoxDiego(20);
console.log('Another count.')
myMoneyBoxFernando(10);
myMoneyBoxFernando(15);
myMoneyBoxFernando(20);