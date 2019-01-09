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
    '2,3,1',
    '5,2,3'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let inputOne = gets().split('').map(el => +el);
let inputTwo = gets().split('').map(el => +el);

let newList = [];

for (var index = 0; index < inputOne.length; index += 2) {
    newList.push(index);
}
    print(newList);

