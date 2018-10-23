'use strict';


function solve(args) {

    let aString = args[0];
    let a = +aString;

    let bString = args[1];
    let b = +bString;

    let cString = args[2];
    let c = +cString;

    let dString = args[3];
    let d = +dString;

    let eString = args[4];
    let e = +eString;

    if ((a > b) && (a > c) && (a > d) && (a > e)) {
        console.log(`${a}`);
    }
    else if ((b >= a) && (b >= c) && (b >= d) && (b >= e)) {
        console.log(`${b}`);
    } else if ((c >= a) && (c >= b) && (c >= d) && (c >= e)) {
        console.log(`${c}`);
    } else if ((d >= a) && (d >= c) && (d >= b) && (d >= e)) {
        console.log(`${d}`);
    } else if ((e >= a) && (e >= c) && (e >= d) && (e >= b)) {
        console.log(`${e}`);
    } else {
        console.log(`Input  a valid number`);
    }

}

let elements = ['-3', '-0.5', '-1.1', '-2', '-0.1'];
solve(elements);
