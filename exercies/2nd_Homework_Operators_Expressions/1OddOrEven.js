'use strict';

function solve(args) {

    let a = args[0];

    if (a % 2 === 0) {
        console.log(`Even -> ${a}`);
    } else if (a % 2 !== 0) {
        console.log(`Odd ->  ${a}`);
    } else {
        console.log(`Please, enter a valid number!`);
    }
}

let number = [3];
solve(number);