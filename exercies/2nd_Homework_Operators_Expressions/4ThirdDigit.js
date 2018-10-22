'use strict';

function solve(args) {

    let numberString = args[0];
    let n = +numberString[3];

    if (n === 7) {
        console.log(`true ${n}`);
    }
    else {
        console.log(`false THIRD_DIGIT ${n}`);
    }


}

const array = [`12375678`];
solve(array);