'use strict';

function solve(args) {

    let a = +args[0];

    if (typeof a !== "number" || Number.isNaN(a)) {
        console.log(`Please, enter a valid number!`);
        return;
    }

    if (a % 5 === 0 && a % 7 === 0) {
        console.log(`true ${a}`);
    } else if (a % 5 !== 0 && a % 7 !== 0) {
        console.log(`false ${a}`);
    }

}

const number = ['asd'];
solve(number);