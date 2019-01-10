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

const n = +gets();
let array = [];
let prime = [];
let not = [];

function isPrime(n) {
    let flagIsPrime = true;
    for (let index = 2; index < n; index++) {
        if (n % index === 0) {
            flagIsPrime = false;
            break;
        }
    }
    return flagIsPrime;
}

//fill the array from 1 to N;
for (let index = 1; index <= n; index++) {
    array.push(index);
}

// console.log(array);

// //here is how many rows we will p
for (let j = 0; j < array.length; j++) {

    if (isPrime(array[j])) {
        prime.push(array[[j]]);
    }

}

// console.log(prime);

for(let i = 0; i < prime.length; i++) {
    const primeNumber = prime[i];
    const numberRow = [];

    for(let j = 1; j <= primeNumber; j++) {
        const numberToPrint = isPrime(j) ? 1 : 0;
        numberRow.push(numberToPrint);
    }
    print(numberRow.join(''));

