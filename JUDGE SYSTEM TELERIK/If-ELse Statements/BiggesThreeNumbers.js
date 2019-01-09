'use strict';
const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = [
    'd',
    '5'
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

let files = gets();
let ranks = +gets();
let number1 = +gets();

let number2 = +gets();

let number3 = +gets();

if (number1 > number2 && number1 > number3) {
    print(`${number1}`)
} else if (number2 > number1 && number2 > number3) {
    print(`${number2}`);
} else {
    print(`${number3}`);
}