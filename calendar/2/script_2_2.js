const { ['inputs'] : input, ['exampleInputs'] : example } = require('./const');

robot = {
    hor: 0,
    depth: 0,
    aim: 0,
    forward: function(value) {
        this.hor += value
        this.depth += (this.aim * value)
    },
    down: function(value) {
        this.aim += value;
    },
    up: function(value) {
        this.aim -= value;
    },
    score: function() { return this.hor * this.depth }
}

input.forEach((value) => {
    [command, value] = value.split(' ');
    robot[command](parseInt(value));
});

console.log(robot.score());
