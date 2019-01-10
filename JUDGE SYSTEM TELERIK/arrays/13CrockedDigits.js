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
    '1020340567.89',
    
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;
let number = gets();

while (number.length > 1) {
    let newNumber = 0;

    for (let ch of number) {
        if (ch === '.' || ch === '-') {
            continue;
        }

        newNumber += ch.charCodeAt(0) - '0'.charCodeAt(0);
    }

    number = newNumber.toString();
}

print(number);