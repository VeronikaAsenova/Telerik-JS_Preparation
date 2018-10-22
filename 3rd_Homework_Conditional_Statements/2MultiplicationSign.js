'use strict';

function solve(args) {


    let aString = args[0];
    let a = +aString;

    let bString = args[1];
    let b = +bString;

    let cString = args[0];
    let c = +cString;

    if (a * b * c > 0) {
        console.log(`+`);
    } else if (a * b * c < 0) {
        console.log(`-`);
    } else {
        console.log(`0`);
    }

}

let elements = ['0', '-2', '1'];
solve(elements);