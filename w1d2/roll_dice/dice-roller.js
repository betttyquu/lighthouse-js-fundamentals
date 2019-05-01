// finding a random num between 1 ~ 6 
// make a command line argument
// call function 3 times if command line argument = 3 

var num = process.argv[2];
num = Number(num);
// console.log(argument);
function rolldice(min, max) {
    // var max = 6;
    // var min = 1;
    var range = max - min;
    var offset = min;
    return Math.round(offset + (Math.random() * range));
}

function diceroller(num) {
    var diceresult = [];
    for (let i = 0; i < num; i++) {
        // var random = rolldice();
      diceresult.push(rolldice(1, 6));
    }
    return diceresult;
}
var rolled = diceroller(num);
console.log('rolled:' + num + ' times:', rolled.join(', '));
// console.log("Rolled " + num + " times: " + diceroller(num));
