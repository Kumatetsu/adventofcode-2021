const {exampleGrids, grids, exampleNumbers, numbers} = require('./const');

num = numbers;

const transpose = (matrix) => {
    let row = matrix
    return row.map((v, column) => matrix.map(row => row[column]))
}

const gridReducer = (p, n) => num.filter(value => n.includes(value)).length === 5 ? true : p;

const isWinningGrid = (grid) => {
    rowResult = grid.reduce(gridReducer, false);
    columnResult = transpose(grid).reduce(gridReducer, false);
    return rowResult || columnResult
}

while (num.length > 0) {
    r = grids.reduce((previousGrid, currentGrid) => {
        return isWinningGrid(currentGrid) ? previousGrid : currentGrid
    }, []);

    if (r.length != 0) {
        num.push(...previousNumber);
        break;
    }

    previousNumber = num.splice(-1)
}

sum = r.reduce((p, c) => p + c.reduce((p, c) => p + (num.includes(c) ? 0 : c), 0), 0);
console.log(sum * previousNumber);
