const { ['report'] : report } = require('./const');

let baseAmount = report.slice(0, 3).reduce((pre, next) => pre + next, 0);
let counter = 0;

function getValue(index) {
    return report[index] ?? 0;
}

function getN1(index) {
    return getValue(index + 1);
}

function getN2(index) {
    return getValue(index + 2)
}

function getPrevious(index) {
    return getValue(index - 1);
}

report.forEach((element, index) => {
    if (index === 0) {
        return;
    }

    currentAmount = (baseAmount - getPrevious(index)) + getN2(index);

    if (currentAmount > baseAmount) {
        counter ++;
    }

    baseAmount = currentAmount;
});

console.log(counter);
