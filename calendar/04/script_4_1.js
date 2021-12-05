const {exampleGrids, grids, exampleNumbers, numbers} = require('./const');

num = numbers.splice(0, 5);
const transpose = (matrix) => {
    let row = matrix
    return row.map((v, column) => matrix.map(row => row[column]))
}
const filter = (previousRow, currentRow) => previousRow.length === 5 ? previousRow : num.filter(value => currentRow.includes(value))

for(i = 0; i < numbers.length - 1; i++) {
    r = grids.reduce((previousGrid, currentGrid) => {
        if (previousGrid.length != 0) {
            return previousGrid
        }

        rowResult = currentGrid.reduce(filter, []);
        if (rowResult.length === 5) {
            return currentGrid;
        }

        columns = transpose(currentGrid);

        columnResult= columns.reduce(filter, []);
        if (columnResult.length === 5) {
            return currentGrid
        }

        return previousGrid;
    }, []);

    if (r.length != 0) {
        break;
    }

    num.push(numbers[i]);
}

sum = r.reduce((p, c) => p + c.reduce((p, c) => p + (num.includes(c) ? 0 : c), 0), 0);
console.log(sum * num.pop());
