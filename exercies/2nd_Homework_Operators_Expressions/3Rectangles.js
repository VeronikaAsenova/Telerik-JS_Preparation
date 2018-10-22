'use strict';

function solve(args) {

    let width = args[0];
    let height = args[1];

    const perimeter = 2 * (width + height);
    const area = width * height;

    console.log(`rectangle’s perimeter is ${perimeter} , \n rectangle’s area is ${area} `)

}

let elements = [2.4, 4.1];
solve(elements);