//! El ámbito local está basado en el lugar donde se incializa una variable para con esto dar su ejecución y alcance.

const buildConst = (i) => {
    count = 0 ;
        displayCount = () => {
            console.log(count++);
        }
        return displayCount;
};

let myFirstCount = buildConst(1);
myFirstCount();
myFirstCount();
myFirstCount();
myFirstCount();
myFirstCount(); // * Esto es ejecutrar el closure.