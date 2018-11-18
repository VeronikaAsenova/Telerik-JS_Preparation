'use strict';

function solve(args) {

    let a = args[0];
    let b = args[1];
    let h = args[2];

    const area = ((a + b) * h) / 2;

    console.log(`${area.toFixed(7)}`);
}

const elements = [2.3, 2.1, 3.1];
solve(elements);