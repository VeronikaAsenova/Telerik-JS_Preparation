'use strict';

function solve(args) {

    let numberString = args[0];
    let n = +numberString[3];

    if (n === 7) {
        console.log(`true`);
    }
    else {
        console.log(`false ${n}`);
    }


}

const array = [`12375678`];
solve(array);