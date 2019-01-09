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
    '81,5,5,1,5,41,8'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let input = gets().split(',').map(el => +el);
input = input + " ";
print(input);

print(input.split("").reverse().join(""));

