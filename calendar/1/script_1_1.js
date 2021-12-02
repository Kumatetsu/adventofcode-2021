const { ['report'] : report } = require('./const');
let counter = 0;

report.forEach((element, index, array) => {
    if (array.indexOf(index - 1)
        && element > array[index - 1]) {
        counter++;
    }
});

console.log(counter);
