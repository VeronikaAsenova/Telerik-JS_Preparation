'use strict';

function solve(args) {

    let width = args[0];
    let height = args[1];

    const perimeter = 2 * (width + height);
    const area = width * height;

    console.log(`${perimeter.toFixed(2)} ${area.toFixed(2)}`)

}

let elements = [2.4, 4.1];
solve(elements);