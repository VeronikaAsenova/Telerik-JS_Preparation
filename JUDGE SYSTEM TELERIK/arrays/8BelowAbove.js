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
    '0,1,-1'

];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const input = gets().split(',').map(el => +el);
const length = input.length;

let sum = 0;
for (let index = 0; index < input.length; index++) {
    sum += input[index];
}

let average = sum / length;

let below = [];
let above = [];
for (let i = 0; i < input.length; i++) {
    if (input[i] < average) {
        below.push(input[i]);
    }
    if (input[i] > average) {
        above.push(input[i]);

    }

}
print("avg: "+average.toFixed(2));
print("below: "+below.join(","));
print("above: "+above.join(","));
