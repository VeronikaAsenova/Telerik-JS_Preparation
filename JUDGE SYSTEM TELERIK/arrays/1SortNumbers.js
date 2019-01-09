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
    '2',' 3', ' 5'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const array = +gets();

let biggest = 0;

for (let i = 0; i <array; i++) {
    if (biggest < array[i]) {
        biggest = array[i];
        
        
    }
} print(biggest);
