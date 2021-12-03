const { ['inputs'] : input, ['exampleInputs'] : example } = require('./const');

function getGammaRate(array) {
    return array.reduce((p,c) => {
        return p + c.indexOf(Math.max(...c));
    }, '');
}

function getEpsilonRate(gamma) {
    return gamma.split('').reduce((p,c) => {
        return p + (c === '0' ? '1' : '0');
    }, '');
}

function binaryToInteger(binary) {
    return parseInt(binary, 2);
}

function getPowerConsumption(gamma, epsilon) {
    return binaryToInteger(gamma) * binaryToInteger(epsilon);
}

stock = input.reduce((p, c) => {
    binary = c.split('');
    return binary.reduce((p, c, i) => {
        p[i] = p[i] || [];
        p[i][c] = p[i][c] ? p[i][c]+1 : 1;

        return p
    }, p);
}, []);

gamma = getGammaRate(stock);
epsilon = getEpsilonRate(gamma);

console.log(getPowerConsumption(gamma, epsilon));
