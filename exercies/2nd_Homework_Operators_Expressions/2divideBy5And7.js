'use strict';

function solve(args) {

    let a = args[0];

    if (a % 5 === 0 && a % 7 === 0) {
        console.log(`true ${a}`);
    } else if (a % 5 !== 0 && a % 7 !== 0) {
        console.log(`false ${a}`);
    } else {
        console.log(`Please, enter a valid number!`);
    }

}

const number = ['36'];
solve(number);