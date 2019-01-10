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
    '3',
    '1,2,3,4,5',
    '1,2,8,9,9',
    '1,2,2,3,2'

];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const tries = +gets();

for (let i = 0; i < tries; i++) {
    let array = gets().split(',').map(e => +e);

    let isArraySorted = true;

    for (let j = 0; j < array.length - 1; j++) {
        if (array[j] > array[j + 1]) {
            isArraySorted = false;
            break;
        }
    }

    print(isArraySorted);
}



