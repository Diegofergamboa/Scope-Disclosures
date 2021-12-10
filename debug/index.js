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

const moneyBox = (coins) => {
    var saveCoins = 0;
    saveCoins += coins;
    console.log(saveCoins);
}

moneyBox(5);
moneyBox(10);