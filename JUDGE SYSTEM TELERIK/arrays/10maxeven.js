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
    'Prihodi 23456 danaci 34 razhodi 23455 I drugi'

];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const input = gets().split(' ');
let array = [];
array = input;
let row = [];

let numbers = [];

row = gets().split("");
print(row);


function isEven(input) {
    return input % 2 === 0;
}

// let chars = gets().split("");

for (let index = 0; index < array.length; index++) {
    if (isNaN(array[index])) {
        continue;
    } else {
        if (isEven(array[index])) {
            numbers.push(array[index]);
        } else {
            continue;
        }
    }
}

// print(chars.length);
if (numbers.length > 0 && numbers.length <= 1000000) {
    print(Math.max(...numbers));
} else {
    print(-1);
}