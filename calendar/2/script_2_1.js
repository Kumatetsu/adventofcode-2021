const { ['inputs'] : input, ['exampleInputs'] : example } = require('./const');

robot = {
    hor: 0,
    depth: 0,
    forward: function(value) { this.hor += value },
    down: function(value) { this.depth += value },
    up: function(value) { this.depth -= value },
    score: function() { return this.hor * this.depth }
}

input.forEach((value) => {
    [command, value] = value.split(' ');
    robot[command](parseInt(value));
});

console.log(robot.score());
