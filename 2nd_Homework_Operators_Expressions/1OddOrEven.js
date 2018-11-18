'use strict';

function solve(input) {

    const number = +input[0];

    if (number % 2 === 0) {
        console.log(`Even -> ${number}`);
    } else if (number % 2 !== 0) {
        console.log(`Odd ->  ${number}`);
    } else {
        console.log(`Please, enter a valid number!`);
    }
}

solve(["4"]);

// use const instead of let always when possible
// naming!!!