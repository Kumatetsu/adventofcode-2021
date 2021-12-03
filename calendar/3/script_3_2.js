const { ['inputs'] : input, ['exampleInputs'] : example } = require('./const');

oxygenGeneratorRating = 0;
co2ScrubberRating = 0;

function findOxygenRating(input)
{
    criteria = 1;
    return filter(input, criteria);
}

function findCo2Rating(input)
{
    criteria = 0;
    return filter(input, criteria);
}

function challenge(data, criteria)
{
    nonCriteria = criteria === 1 ? 0 : 1;

    if (criteria === 1) {
        return data[criteria].length >= data[nonCriteria].length ? data[criteria] : data[nonCriteria];
    }

    return data[criteria].length <= data[nonCriteria].length ? data[criteria] : data[nonCriteria];
}

function filter(data, criteria)
{
    for (i = 0; i <= data[0].length - 1; i++) {
        map = {0: [], 1: []};

        tmpArray = data.reduce((pre, value) => {
            pre[value[i]].push(value)
            return pre
        }, map);

        data = challenge(tmpArray, criteria)

        if (data.length === 1) {
            return parseInt(data[0], 2);
        }
    }
}

console.log(findOxygenRating(input) * findCo2Rating(input));
