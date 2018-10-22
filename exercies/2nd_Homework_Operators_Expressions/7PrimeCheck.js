'use strict';

function solve(args) {

    let number = args[0];


    if (number % number === 0 && number % 1 === 0) {
        console.log(`Prime -> ${number}`);
    }
    if (number % number === 0 && number % 1 === 0 && number % 2 === 0) {
        console.log(`False prime -> ${number}`);
    }
    else {
        console.log(`Please, enter a valid number!`);
    }
}
const elements = [6];
solve(elements);