var a = 'Hello';

function hello() {
    let b = 'hello world';
    const c = 'hello world!'
    if (true) {
        let d = 'hello world !!!';
        debugger
    }
}

hello();

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