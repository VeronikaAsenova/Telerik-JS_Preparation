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
    '4',
    '3',
    '2',
    '5',
    '1'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();

let min = 0;
let max = 0;
let avg = 0;
let sum = 0;

for (let i = 0; i < n; i++) {

    if (min <= i) {
        min = i;
    }
    if (max >= i) {
        max = i;
    }
    sum += +gets();

}
avg = sum / n;
print("min= " + min);
print("max= " + max);
print("sum= " + sum);
print("avg= " + avg.toFixed(2));
