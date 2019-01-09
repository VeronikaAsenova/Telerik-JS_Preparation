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
    '10'

];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = gets().split().map(el => +el);
let array = [];
let prime = [];

function isPrime(n) {
}

//fill the array from 1 to N;
for (let index = 1; index <= n; index++) {
    array.push(index);
}

//here is how many rows we will p
for (let j = 0; j < array.length; j++) {
    if (isNaN(array[j])) {
        continue;
    } else {
        if (isPrime(array[j])) {
            prime.push(array[[j]]);
        }
    }
}




print(array);
print(prime);


