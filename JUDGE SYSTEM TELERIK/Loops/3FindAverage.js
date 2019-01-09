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
    '1',
    '1',
    '1',
    '1'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
let sum = 0;
let average = 0;

for (let i = 0; i < n; i++) {
    sum += +gets();
}
average = sum / n;
print(average.toFixed(2));
