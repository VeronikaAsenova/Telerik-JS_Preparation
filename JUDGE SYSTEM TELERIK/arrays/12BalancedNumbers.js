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
    '132',
    '123'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let sum = 0;

while (true) {
    let [x, y, z] = gets();
    if (+x + +z !== +y) {
        break;
    }
    sum += +(x + y + z);
}
print(sum);
