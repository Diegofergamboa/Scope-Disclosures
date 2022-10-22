// //! Esto no es un closure

// const moneyBox = (coins) => {
//     var saveCoins = 0;
//     saveCoins += coins;
//     console.log(saveCoins);
// }

// moneyBox(5);
// moneyBox(10);


const moneyBox = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(saveCoins);
    }
    return countCoins;
}


let money = moneyBox();
moneyBox(5);
moneyBox(10);

console.log(money);