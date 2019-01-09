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
    '1,2,3,3,5'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const inputArray = gets().split(',').map(element => +element);
// const input = gets();
// print(typeof input);
// print(input);
// print(input.split(',').map(element => +element));


// print(inputArray);
let missing = [];

for (let i = 0; i < inputArray.length; i++) {
 
    
    }
