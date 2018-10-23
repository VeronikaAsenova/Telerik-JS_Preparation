'use strict';

function solve(args) {

    let numString1 = args[0];
    let a = +numString1;

    let numString2 = args[1];
    let b = +numString2;

    let numString3 = args[2];
    let c = +numString3;

    if ((a > b) && (a > c)) {
        if (b > c) {
            console.log(`${a}, ${b}, ${c}`);
        }
        else { console.log(`${a}, ${c}, ${b}`) }
    }

    else if ((b > a) && (b > c)) {
        if (a > c) {
            console.log(`${b}, ${a}, ${c}`)
        } else {
            console.log(`${b}, ${c}, ${a}`)
        }
    }

    else if ((c > a) && (c > b)) {
        if (a > b) {
            console.log(`${c}, ${a}, ${b}`)
        } else {
            console.log(`${c}, ${b}, ${a}`)
        }

    }
}

let elements = ['-2', '4', '3'];
solve(elements);